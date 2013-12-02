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
      collaborators: function($q, Auth){
          return ;
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'collaboratorsSitesCtrl', function CollaboratorsSitesController( $scope, $rootScope, Auth, collaborators ) {
  console.log('collaboratorsSitesCtrl');
  Auth.isAuthenticated();

  $scope.localCollaborators = [
            {
              name:'Eric McGregor',
              email:'eric.mcgregor@rackspace.com',
              company:"Rackspace",
              roles:["Site Manager"],
              status:'active'
            },
            {
              name:'Billy Joe',
              email:'billy.joe@gmail.com',
              company:"Rackspace",
              roles:["Site Manager"],
              status:'pending'
            }
          ];
})
;