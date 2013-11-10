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
  'myApp.newsite',
  'myApp.offcanvas',
]);

var filters = angular.module('myApp.filters', []);
var directives = angular.module('myApp.directives', []);


myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {


  $routeProvider.when('/', {templateUrl: 'app/templates/sites.html', controller: ''});

  $routeProvider.when('/signup', {templateUrl: 'app/templates/signup.html', controller: 'MyCtrl1'});

  $routeProvider.when('/activate', {templateUrl: 'app/templates/activate.html', controller: 'MyCtrl1'});



  $routeProvider.when('/sites', {templateUrl: 'app/templates/sites.html', controller: 'appCtrl'});

  $routeProvider.when('/sites/build', {templateUrl: 'app/templates/sites.build.html', controller: 'appCtrl'});

  $routeProvider.when('/sites/new', {templateUrl: 'app/templates/sites.new.html', controller: 'appCtrl'});

  $routeProvider.when('/sites/detail', {templateUrl: 'app/templates/sites.detail.html', controller: 'appCtrl'});
  
  $routeProvider.when('/wordpress', {templateUrl: 'app/templates/wordpress.html', controller: 'appCtrl'});
  
  $routeProvider.when('/account', {templateUrl: 'app/templates/account.html', controller: 'appCtrl'});


  $routeProvider.when('/test', {templateUrl: 'partials/partial1.html', controller: 'appCtrl'});


  $routeProvider.otherwise({redirectTo: '/'});

}]);


// this is run after angular is instantiated and bootstrapped
myApp.run(function ($rootScope, $location, $http, $timeout) {


});