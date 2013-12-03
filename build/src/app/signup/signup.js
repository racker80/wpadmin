angular.module( 'ngBoilerplate.signup', [
  'ui.state'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'signup', {
    url: '/signup',
    views: {
      "signup": {
        controller: 'signupCtrl',
        templateUrl: 'signup/signup.tpl.html'
      }
    },
    data:{ pageTitle: 'Signup' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'signupCtrl', function SignupController( $scope, $state, $location, User ) {
  console.log('signupCtrl');
  $scope.signup = {};
      
      $scope.doSignup = function(){
        var user = new Parse.User();
        $scope.signup.email = $scope.signup.username;
        // user.set("username", $scope.signup.email);
        // user.set("password", $scope.signup.password);
        // user.set("email", $scope.signup.email);

        console.log($scope.signup);
        user.signUp(angular.copy($scope.signup), {
          success: function(user) {
              // Hooray! Let them use the app now.
              $state.transitionTo('sites.mine');
          },
          error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
          }
        }); 
      };
})
;

