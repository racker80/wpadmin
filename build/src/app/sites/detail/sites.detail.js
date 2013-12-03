/**

 */
angular.module( 'ngBoilerplate.sites.detail', [
  'ui.state'
])


.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'sites.mine.detail', {
    url: '/{siteId}',
    views: {
      "main@": {
        controller: 'mySitesDetailCtrl',
        templateUrl: 'sites/detail/sites.detail.tpl.html'
      }
    },
    resolve: {
      site: function($q, Auth, $stateParams){
          var Site = Parse.Object.extend("Site");
          var query = new Parse.Query(Site);
          query.equalTo("objectId", $stateParams.siteId);
          var defer = $q.defer();
          query.find({
            success: function(results) {
              console.log(results);
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
  })
  .state('sites.mine.detail.account', {
    url:'/account',
    views:{
      "detailContent":{
        templateUrl:'sites/detail/sites.detail.account.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  })
  .state('sites.mine.detail.wordpress', {
    url:'/wordpress',
    views:{
      "detailContent":{
        templateUrl:'sites/detail/sites.detail.wordpress.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  })
  .state('sites.mine.detail.development', {
    url:'/development',
    views:{
      "detailContent":{
        templateUrl:'sites/detail/sites.detail.development.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'mySitesDetailCtrl', function MySitesDetailController( $scope, $rootScope, $state, Auth, site ) {
  Auth.isAuthenticated();

  $scope.site = site[0].attributes;
  $scope.site.id = site[0].id;

  console.log($scope.site);

})




.directive('sparkline', function(){
  return {
    restrict:"C",
    link:function(scope, element, attrs) {
      var generateSparkline = function(){
        var $data = element.data();
        element.sparkline( $data.data || "html", $data);
      };    

      generateSparkline();

        var sparkResize;
        $(window).resize(function(e) {
          clearTimeout(sparkResize);
          sparkResize = setTimeout(function(){
            generateSparkline();
          }, 0);
        });


    }
  };
})


;
