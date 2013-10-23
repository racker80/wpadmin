'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngGrid', // angular grid
  'ui.bootstrap' //bootstrap
]);

var filters = angular.module('myApp.filters', []);
var directives = angular.module('myApp.directives', []);


myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

  // $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  // $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  // $routeProvider.otherwise({redirectTo: '/view1'});


  $routeProvider.when('/', {templateUrl: 'partials/templates/login.html', controller: 'MyCtrl1'});

  $routeProvider.when('/signup', {templateUrl: 'partials/templates/signup.html', controller: 'MyCtrl1'});

  $routeProvider.when('/activate', {templateUrl: 'partials/templates/activate.html', controller: 'MyCtrl1'});



  $routeProvider.when('/sites', {templateUrl: 'partials/templates/sites.html', controller: 'MyCtrl1'});

  $routeProvider.when('/sites/managed', {templateUrl: 'partials/templates/sites.managed.html', controller: 'MyCtrl1'});

  $routeProvider.when('/sites/collaborators', {templateUrl: 'partials/templates/sites.collaborators.html', controller: 'MyCtrl1'});

  $routeProvider.when('/sites/new', {templateUrl: 'partials/templates/sites.new.html', controller: 'MyCtrl1'});

  $routeProvider.when('/sites/detail', {templateUrl: 'partials/templates/sites.detail.html', controller: 'MyCtrl1'});
  
  $routeProvider.when('/wordpress', {templateUrl: 'partials/templates/wordpress.html', controller: 'MyCtrl1'});
  
  $routeProvider.when('/account', {templateUrl: 'partials/templates/account.html', controller: 'MyCtrl1'});


  $routeProvider.when('/test', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});


}]);


// this is run after angular is instantiated and bootstrapped
myApp.run(function ($rootScope, $location, $http, $timeout) {


});