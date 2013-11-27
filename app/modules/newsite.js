
angular.module('myApp.newsite', [])

.factory('wpOptions', function(){
	return {
		url:'',
    siteTitle:'',
    description:'',
		pages:[],
    themes:[],
    plugins:[],
    admin:{},
    menus:[],
    options:[],
    wpusers:[],
	}
})



.directive('newSite', function($http, $compile, $rootScope, wpOptions, Data, toggleStateService, offCanvasService) {
    return {
      restrict:"A",
      scope:{},
      link: function(scope, element, attrs) {
        scope.currentUser = $rootScope.currentUser;
        scope.Data = Data;
        scope.options = angular.copy(wpOptions);
        scope.offCanvasService = offCanvasService;
        console.log(scope)


        scope.addItem = function(obj, location) {
          location.push(angular.copy(obj))
        }

        scope.createSite = function() {
          if(scope.options.themes[0])
          scope.options.image = scope.options.themes[0].image;
          
              var Site = Parse.Object.extend("Site");
              var site = new Site();

              site.save({
                userID:$rootScope.currentUser.id,
                url:scope.options.url,
                image:scope.options.image,
                themes:angular.copy(scope.options.themes),
                plugins:angular.copy(scope.options.plugins),
              }, {
                success: function(site) {
                // The object was saved successfully.
                console.log(site)
                $rootScope.go('/sites');
              },
              error: function(site, error) {
                console.log(error)
                // The save failed.
                // error is a Parse.Error with an error code and description.
              }
            });




          // console.log(scope.options)

          // Data.sites.mySites.push(angular.copy(scope.options));




          // scope.options = angular.copy(wpOptions);


        }




      //         var GameScore = Parse.Object.extend("GameScore");
      //         var gameScore = new GameScore();

      //         gameScore.save({
      //           score: 1337,
      //           playerName: "Sean Plott",
      //           cheatMode: false
      //         }, {
      //           success: function(gameScore) {
      //     // The object was saved successfully.
      //   },
      //   error: function(gameScore, error) {
      //     // The save failed.
      //     // error is a Parse.Error with an error code and description.
      //   }
      // });



      }
    
    }
  });