
angular.module('myApp.signup', [])

.directive('signup', function($rootScope){
	return {
		restrict:'A',
		scope: {},
		controller: function($scope) {
			$scope.signup = {}
			
			$scope.doSignup = function(){
				var user = new Parse.User();
				user.set("username", $scope.signup.email);
				user.set("password", $scope.signup.password);
				user.set("email", $scope.signup.email);


				user.signUp(null, {
					success: function(user) {
					    // Hooray! Let them use the app now.
					    $rootScope.go('/sites')
					},
					error: function(user, error) {
					    // Show the error message somewhere and let the user try again.
					    alert("Error: " + error.code + " " + error.message);
					}
				});	
			}
					


		},
		link:function(scope, elm, attrs, controller) {


		}
	}

});