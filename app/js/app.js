'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.data',
  'ngGrid', // angular grid
  'ui.bootstrap' //bootstrap
]);

var filters = angular.module('myApp.filters', []);
var directives = angular.module('myApp.directives', []);


myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

  // $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  // $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  // $routeProvider.otherwise({redirectTo: '/view1'});


  $routeProvider.when('/', {templateUrl: 'templates/login.html', controller: 'MyCtrl1'});

  $routeProvider.when('/signup', {templateUrl: 'templates/signup.html', controller: 'MyCtrl1'});

  $routeProvider.when('/activate', {templateUrl: 'templates/activate.html', controller: 'MyCtrl1'});



  $routeProvider.when('/sites', {templateUrl: 'templates/sites.html', controller: 'MyCtrl1'});

  $routeProvider.when('/sites/build', {templateUrl: 'templates/sites.build.html', controller: 'MyCtrl1'});

  $routeProvider.when('/sites/new', {templateUrl: 'templates/sites.new.html', controller: 'MyCtrl1'});

  $routeProvider.when('/sites/detail', {templateUrl: 'templates/sites.detail.html', controller: 'MyCtrl1'});
  
  $routeProvider.when('/wordpress', {templateUrl: 'templates/wordpress.html', controller: 'MyCtrl1'});
  
  $routeProvider.when('/account', {templateUrl: 'templates/account.html', controller: 'MyCtrl1'});


  $routeProvider.when('/test', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});


}]);


// this is run after angular is instantiated and bootstrapped
myApp.run(function ($rootScope, $location, $http, $timeout) {


});