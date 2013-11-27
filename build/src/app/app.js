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

.run( function run ($rootScope, Auth, User) {
    Parse.initialize("8fxedtub66Zg4xaQK6lGWL69vWz5J1mea3Pl5dqS", "pB4GLidCL1v8vocZY3H03TlECcE0ab6dFrBg8yz8");
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

.factory('User', function(Auth, $rootScope, $q){
  var service = {};

  service.resolved = {
    themes:false
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
          location.splice(index,1);
          $rootScope.$apply();
        },
        error: function(myObject, error) {
          // The delete failed.
          // error is a Parse.Error with an error code and description.
          console.log('object deletion failed '+ error);
        }
      });
  };
  service.save = {
    theme: function(item){
      console.log(item);
       var Theme = Parse.Object.extend("Theme");
       var theme = new Theme();
       item.userId = Auth.currentUser().id;

       theme.save(angular.copy(item), {
        success: function(theme) {
          console.log(theme);
          service.themes.push(theme);
          $rootScope.$apply();
        },
        error: function(theme, error) {
          console.log(error);
        }
      });
    }
  };

  service.update = {
    themes: function(){
      var Theme = Parse.Object.extend("Theme");
      var query = new Parse.Query(Theme);
      query.equalTo("userId", Auth.currentUser().id);
      var defer = $q.defer();
      query.find({
        success: function(results) {
          console.log('theme query made');
          service.themes = results;
          service.resolved.themes = true;
          defer.resolve(service.themes);
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
      return defer.promise;
    }
  };

  service.themes = [];


  return service;

})

;

