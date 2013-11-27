/**

 */
angular.module( 'ngBoilerplate.sites.managed', [
  'ui.state'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'sites.managed', {
    url: '/managed-sites',
    views: {
      "content": {
        controller: 'managedSitesCtrl',
        templateUrl: 'sites/managed/sites.managed.tpl.html'
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
.controller( 'managedSitesCtrl', function ManagedSitesController( $scope, $rootScope, Auth, sites ) {
  console.log('managedSitesCtrl');
  Auth.isAuthenticated();

  $scope.sites = sites;
})
;