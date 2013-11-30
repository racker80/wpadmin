/**

 */
angular.module( 'ngBoilerplate.sites.new', [
  'ui.state'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'sites.new', {
    url: '/new',
    views: {
      "main@": {
        controller: 'newSitesCtrl',
        templateUrl: 'sites/new/sites.new.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'newSitesCtrl', function NewSitesController( $scope, $rootScope, Auth, $state ) {
  console.log('newSitesCtrl');
  Auth.isAuthenticated();




  
})

.directive('newSite', function($http, $compile, $rootScope, $state, User) {
    return {
      restrict:"A",
      scope:{},
      controller:function($scope){
        console.log('new site directive ctrl');
        $scope.options = {
          userId: Parse.User.current().id
        };

        
        $scope.createSite = function() {
          // var scope = $scope;
          // // if(scope.options.themes[0]){
          // //   scope.options.image = scope.options.themes[0].image;
          // // }
          
          //     var Site = Parse.Object.extend("Site");
          //     var site = new Site();

          //     site.save({
          //       userID:Parse.User.current().id,
          //       url:scope.options.url,
          //       image:scope.options.image,
          //       themes:angular.copy(scope.options.themes),
          //       plugins:angular.copy(scope.options.plugins)
          //     }, {
          //       success: function(site) {
          //       // The object was saved successfully.
          //       console.log(site);
          //       $state.transitionTo('sites.mine');
          //     },
          //     error: function(site, error) {
          //       console.log(error);
          //       // The save failed.
          //       // error is a Parse.Error with an error code and description.
          //     }
          //   });
          User.add('Site', $scope.options);
          $state.transitionTo('sites.mine');

        };        

      },
      link: function(scope, element, attrs) {
        // scope.currentUser = $rootScope.currentUser;
        // scope.Data = Data;
        // scope.options = angular.copy(wpOptions);
        // scope.offCanvasService = offCanvasService;
        console.log(scope);

        scope.addItem = function(obj, location) {
          location.push(angular.copy(obj));
        };

      }
    
    };
  })
;
