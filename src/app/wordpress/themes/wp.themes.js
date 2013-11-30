/**

 */
angular.module( 'ngBoilerplate.wp.themes', [
  'ui.state'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'wp.themes', {
    url: '/themes',
    views: {
      "content": {
        controller: 'wpThemesCtrl',
        templateUrl: 'wordpress/themes/wp.themes.tpl.html'
      }
    },
    resolve: {
      themes: function($q, Auth, User){
          if(User.resolved.themes === false) {
              return User.update('Theme');
          } else {
            return User.themes;
          }
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'wpThemesCtrl', function WpThemesController( $scope, $rootScope, Auth, themes, wpData, User ) {
  Auth.isAuthenticated();
  $scope.themes = themes;
  $scope.localThemes = wpData.themes;
})
;