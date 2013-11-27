'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('appCtrl', function(Auth, $scope, $rootScope, $location, toggleStateService, Data, offCanvasService) {
    console.log('appctrl');
    
    //AUTHENTICATION
    var currentUser = Parse.User.current();
    if(!$rootScope.currentUser || $rootScope.currentUser != currentUser) {
    	$location.path('/');
    }
    if (currentUser && !$rootScope.currentUser) {
    	console.log(currentUser)
    	$rootScope.currentUser = currentUser;
    }

  })

.controller('loginCtrl', function($scope, $rootScope, $location){
    console.log('loginCtrl');

	$scope.login = function(){
		Parse.User.logIn($scope.login.email, $scope.login.password, {
			success: function(user) {
			  $location.path('/sites')  
			},
			error: function(user, error) {
			    alert('Nope')
			}
		});
	}

	
})
.controller('signupCtrl', function($scope){
    console.log('loginCtrl');

});


