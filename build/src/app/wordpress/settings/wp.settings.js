/**

 */
angular.module( 'ngBoilerplate.wp.settings', [
  'ui.state'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'wp.settings', {
    url: '/settings',
    views: {
      "content": {
        controller: 'wpSettingsCtrl',
        templateUrl: 'wordpress/settings/wp.settings.tpl.html'
      }
    },
    resolve: {
      sites: function($q, Auth){
          return;
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'wpSettingsCtrl', function WpSettingsController( $scope, $rootScope, Auth, sites ) {
  console.log('wpSettingsCtrl');
  Auth.isAuthenticated();

  $scope.sites = sites;
})
;