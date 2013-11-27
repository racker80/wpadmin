/**

 */
angular.module( 'ngBoilerplate.sites.collaborators', [
  'ui.state'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'sites.collaborators', {
    url: '/collaborators',
    views: {
      "content": {
        controller: 'collaboratorsSitesCtrl',
        templateUrl: 'sites/collaborators/sites.collaborators.tpl.html'
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
.controller( 'collaboratorsSitesCtrl', function CollaboratorsSitesController( $scope, $rootScope, Auth, sites ) {
  console.log('collaboratorsSitesCtrl');
  Auth.isAuthenticated();

  $scope.sites = sites;
})
;