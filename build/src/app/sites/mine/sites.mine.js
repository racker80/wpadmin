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
      sites: function($q, Auth){
          var Site = Parse.Object.extend("Site");
          var query = new Parse.Query(Site);
          query.equalTo("userID", Parse.User.current().id);
          var defer = $q.defer();
          query.find({
            success: function(results) {
              defer.resolve(results);
            },
            error: function(error) {
              alert("Error: " + error.code + " " + error.message);
            }
          });
          return defer.promise;
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
