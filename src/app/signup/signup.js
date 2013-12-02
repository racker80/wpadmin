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
      "main": {
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
  $scope.signup = function(){

  };
})
;

