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
      plugins: function(User){
          if(User.resolved.plugins === false) {
              return User.update('Plugin');
          } else {
            return User.plugins;
          }

      }
    },
    data:{ pageTitle: 'Home' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'wpPluginsCtrl', function WpPluginsController( $scope, $rootScope, Auth, plugins, $http, $q ) {
  console.log('wpPluginsCtrl');
  Auth.isAuthenticated();

  $scope.plugins = plugins;

  // var Plugins = $q.defer();
  // $http.get('search.php', {
  //                   params: {
  //                       type:'search',
  //                       value:'seo',
  //                       action: 'query_plugins'
  //                   }
  //               }).success(function(response){
  //                   console.log(response);
  //                   Plugins.resolve(response);
  //               });
})

.directive('wpSearch', function($http, $rootScope, $q){
    return {
        restrict:'A',
        controller:function($scope){
          console.log('search');
          $scope.search = function(){
            $http.get('search.php', {
              params: {
                type:'search',
                value:$scope.searchField,
                action: 'query_plugins'
              }
            }).success(function(response){
              console.log(response);
              $scope.plugins = response;
            });

          };
          $scope.add = function(plugin){
                Data.wordpress.plugins.push(plugin);
                // scope.myPlugins.push(plugin);
                // localStorageService.add('myPlugins', angular.toJson(scope.myPlugins));
                // console.log('added plugin')
            };

            $scope.clear = function(){
                scope.plugins = [];
            };

        },
        link:function(scope, element, attrs) {
            // scope.myPlugins = angular.fromJson(localStorageService.get('myPlugins'));

            scope.search();

            


        }
    };
})
;
