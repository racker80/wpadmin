angular.module( 'ngBoilerplate', [
  'ngSanitize',
  'ngAnimate',
  'templates-app',
  'templates-common',
  'auth',
  'ngBoilerplate.login',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.sites',
  'ngBoilerplate.sites.new',
  'ngBoilerplate.sites.mine',
  'ngBoilerplate.sites.managed',
  'ngBoilerplate.sites.collaborators',
  'ngBoilerplate.sites.detail',
  'ngBoilerplate.wp',
  'ngBoilerplate.wp.themes',
  'ngBoilerplate.wp.plugins',
  'ngBoilerplate.wp.settings',
  'offcanvas',
  'CheckList',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ($rootScope, Auth, User, ParseSDK, ExtendParseSDK) {
    Auth.isAuthenticated();
    $rootScope.logOut = function(){
      Parse.User.logOut();
      Auth.isAuthenticated();
    };
    $rootScope.User = User;
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

.factory('User', function(Auth, $rootScope, $q, ParseQueryAngular){
  var service = {};

  service.resolved = {
    themes:false,
    sites:false
  };

  service.add = function(type, obj){
    var typePlural = angular.lowercase(type)+'s';
    var Item = Parse.Object.extend(type);
    var item = new Item();
       obj.userId = Auth.currentUser().id;

       item.save(angular.copy(obj), {
        success: function(item) {
          console.log(item);
          service[typePlural].push(item);
          $rootScope.$apply();
        },
        error: function(item, error) {
          console.log(error);
        }
      });
  };

  service.destroy = function(myObject, location, index){
      myObject.destroy({
        success: function(myObject) {
          console.log('destroyed');
          if(angular.isDefined(location)) {
            location.splice(index,1);
          }
          $rootScope.$apply();
        },
        error: function(myObject, error) {
          // The delete failed.
          // error is a Parse.Error with an error code and description.
          console.log('object deletion failed '+ error);
        }
      });
      // var destroy = new ParseQueryAngular(myObject,{functionToCall:"destroy"});
      // console.log(destroy.then(function(results) {
      //     return results;
      // }));
  };
  service.update = function(type){
    var typePlural = angular.lowercase(type)+'s';
    var Update = Parse.Object.extend(type);
    var query = new Parse.Query(Update);
    query.equalTo("userId", Auth.currentUser().id);
    var defer = $q.defer();
    query.find({
      success: function(results) {
        console.log(results);
        service[typePlural] = results;
        service.resolved[typePlural] = true;
        defer.resolve(service[typePlural]);
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
    return defer.promise;
  };
  // service.update = {
  //   themes: function(){
  //     var typePlural = angular.lowercase(type)+'s';
  //     var Update = Parse.Object.extend("type");
  //     var query = new Parse.Query(Update);
  //     query.equalTo("userId", Auth.currentUser().id);
  //     var defer = $q.defer();
  //     query.find({
  //       success: function(results) {
  //         console.log(results);
  //         service[typePlural] = results;
  //         service.resolved[typePlural] = true;
  //         defer.resolve(service[typePlural]);
  //       },
  //       error: function(error) {
  //         alert("Error: " + error.code + " " + error.message);
  //       }
  //     });
  //     return defer.promise;
  //   }
  // };

  service.themes = [];
  service.sites = [];


  return service;

})
.factory('ParseQueryAngular',['$q','$timeout',function ($q, $timeout) { 


  // we use $timeout 0 as a trick to bring resolved promises into the Angular digest
  var angularWrapper = $timeout;

  return function(query,options) {

      // if unspecified, the default function to call is 'find'
      var functionToCall = "find";
      if (!_.isUndefined(options) && !_.isUndefined(options.functionToCall)) {
        functionToCall = options.functionToCall;
      }

      // create a promise to return
      var defer = $q.defer();
      
      // this is the boilerplate stuff that you would normally have to write for every Parse call
      var defaultParams = [{
        success:function(data) {

          /* We're using $timeout as an "angular wrapper" that will force a digest
          * and kind of bring back the data in Angular realm.
          * You could use the classic $scope.$apply as well but here we don't need
          * to pass any $scope as a parameter.
          * Another trick is to inject $rootScope and use $apply on it, but well, $timeout is sexy.
          */
          angularWrapper(function(){
            defer.resolve(data);
          });
        },
        error:function(data,err) {
          angularWrapper(function(){
            defer.reject(err);
          });
        }
      }];
      // Pass custom params if needed.
      if (options && options.params) {
        defaultParams = options.params.concat(defaultParams);
      }
      if (options && options.mergeParams) {
        defaultParams[0] = _.extend(defaultParams[0],options.mergeParams);
      }

      // this is where the async call is made outside the Angular digest
      query[functionToCall].apply(query,defaultParams);

      return defer.promise;

    };

}])
.factory('ExtendParseSDK', ['ParseAbstractService', function(ParseAbstractService) {

  Parse.Object.extendAngular = function(options) {
    return ParseAbstractService.EnhanceObject(Parse.Object.extend(options));
  };

  Parse.Collection.extendAngular = function(options) {
    return ParseAbstractService.EnhanceCollection(Parse.Collection.extend(options));
  };

}])
.factory('ParseAbstractService', ['ParseQueryAngular', function(ParseQueryAngular) {
  /********
    This service provides an enhanced Parse.Object and Parse.Collection
    So we can call load and saveParse from any extending Class and have that wrapped
    within ParseQueryAngular
  **********/


  var object = function(originalClass) {
    originalClass.prototype = _.extend(originalClass.prototype,{
      load:function() {
        return new ParseQueryAngular(this,{functionToCall:"fetch"});
      },
      saveParse:function(data) {
        if (data && typeof data == "object") {
          this.set(data);
        }
        return new ParseQueryAngular(this,{functionToCall:"save", params:[null]});
      }
    });
    return originalClass;
  };

  var collection = function(originalClass){
    originalClass.prototype = _.extend(originalClass.prototype,{
      load:function() {
        return new ParseQueryAngular(this,{functionToCall:"fetch"});
      }
    });
    return originalClass;
  };


  return {
    EnhanceObject:object,
    EnhanceCollection:collection
  };

}])
.factory('ParseSDK', function() {

  // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  Parse.initialize("8fxedtub66Zg4xaQK6lGWL69vWz5J1mea3Pl5dqS", "pB4GLidCL1v8vocZY3H03TlECcE0ab6dFrBg8yz8");


})
;

