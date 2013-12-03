/**

 */
angular.module( 'ngBoilerplate.sites', [
  'ui.state'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'sites', {
    url: '/sites',
    views: {
      "main": {
        controller: 'SitesCtrl',
        templateUrl: 'sites/sites.tpl.html'
      }
    },
    resolve: {

    },    
    data:{ pageTitle: 'Home' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'SitesCtrl', function SitesController( $scope, $rootScope, Auth ) {
  console.log('SitesCtrl');
  Auth.isAuthenticated();

})
;