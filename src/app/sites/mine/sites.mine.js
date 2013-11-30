/**

 */
angular.module( 'ngBoilerplate.sites.mine', [
  'ui.state'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'sites.mine', {
    url: '/my-sites',
    views: {
      "content": {
        controller: 'mySitesCtrl',
        templateUrl: 'sites/mine/sites.mine.tpl.html'
      }
    },
    resolve: {
      auth: function(Auth) {
        Auth.isAuthenticated();
      },
      sites: function(User){
          if(User.resolved.sites === false) {
              return User.update('Site');
          } else {
            return User.sites;
          }

      }
    },
    data:{ pageTitle: 'Home' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'mySitesCtrl', function MySitesController( $scope, $rootScope, Auth, sites ) {
  Auth.isAuthenticated();

  $scope.sites = sites;


})

.directive('mySites', function(){
  return {
    restrict:"A",
    scope:{
      sites:"="
    },
    controller:function($scope){
      $scope.remove = function(myObject, list, index){
          myObject.destroy({
            success: function(result) {
              list.splice(index,1);
              $scope.$apply();
              // The object was deleted from the Parse Cloud.
            },
            error: function(result, error) {
              // The delete failed.
              // error is a Parse.Error with an error code and description.
            }
          });

      }; 
    },
    link:function(scope, element, attrs){

    }
  };
})

;
