'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.data',
  'myApp.signup',
  'myApp.sites',
  'myApp.newsite',
  'myApp.offcanvas',
  'LocalStorageModule'
]);

var filters = angular.module('myApp.filters', []);
var directives = angular.module('myApp.directives', []);
angular.module('LocalStorageModule').value('prefix', 'wpsites');

myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider, SiteList) {


  $routeProvider.when('/', {templateUrl: 'app/templates/login.html', controller: ''});

  $routeProvider.when('/signup', {templateUrl: 'app/templates/signup.html', controller: 'signupCtrl'});

  $routeProvider.when('/activate', {templateUrl: 'app/templates/activate.html', controller: ''});



  $routeProvider.when('/sites', {
    templateUrl: 'app/templates/sites.html', 
    controller: '',
    resolve:{
      auth: function(Auth) {

      },
      sites: function($q){

        var Site = Parse.Object.extend("Site");
        var query = new Parse.Query(Site);
        var defer = $q.defer();
        query.find({
          success: function(results) {
            defer.resolve(results);
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });

        return defer.promise;

        // return SiteList.list();
      }
    },
  });

  $routeProvider.when('/sites/build', {templateUrl: 'app/templates/sites.build.html', controller: ''});

  $routeProvider.when('/sites/new', {templateUrl: 'app/templates/sites.new.html', controller: ''});

  $routeProvider.when('/sites/detail', {templateUrl: 'app/templates/sites.detail.html', controller: ''});
  
  $routeProvider.when('/wordpress', {templateUrl: 'app/templates/wordpress.html', controller: ''});
  
  $routeProvider.when('/account', {templateUrl: 'app/templates/account.html', controller: ''});


  $routeProvider.when('/test', {templateUrl: 'partials/partial1.html', controller: ''});


  $routeProvider.otherwise({redirectTo: '/'});

}]);


// this is run after angular is instantiated and bootstrapped
myApp.run(function ($rootScope, $location, $http, $timeout, localStorageService, toggleStateService, Data) {
  
  Parse.initialize("8fxedtub66Zg4xaQK6lGWL69vWz5J1mea3Pl5dqS", "pB4GLidCL1v8vocZY3H03TlECcE0ab6dFrBg8yz8");



  $rootScope.location = $location;

    $rootScope.go = function ( path ) {
      $location.path( path );
      $rootScope.$apply();
    };
  
    $rootScope.toggleState = toggleStateService;
    $rootScope.Data = Data;    
        $rootScope.viewNewSite = function(){

          // offCanvasService.showDetail = true;
          // offCanvasService.showOffCanvas = true;
          // offCanvasService.detail = {}
          // offCanvasService.detail.template = 'app/templates/modals/site.detail.html';
          // // offCanvasService.detail.input = angular.copy(Data.sites.mySites[Data.sites.mySites.length-1]);
          // offCanvasService.detail.input = [];
          // offCanvasService.detail.output = [];
          // $rootScope.$apply();
           }

  
  $rootScope.logOut = function(){
    alert('test')
    Parse.User.logOut();
    $rootScope.go('/')
  }

  // var currentUser = Parse.User.current();
  //   if (currentUser) {
  //     console.log(currentUser)
  //     $rootScope.currentUser = currentUser;
  //   } else {
  //    alert('you are not logged in')
  //  }


});