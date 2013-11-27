/**

 */
angular.module( 'ngBoilerplate.wp.plugins', [
  'ui.state'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'wp.plugins', {
    url: '/plugins',
    views: {
      "content": {
        controller: 'wpPluginsCtrl',
        templateUrl: 'wordpress/plugins/wp.plugins.tpl.html'
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
.controller( 'wpPluginsCtrl', function WpPluginsController( $scope, $rootScope, Auth, sites ) {
  console.log('wpPluginsCtrl');
  Auth.isAuthenticated();

  $scope.sites = sites;
})
;