
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



.directive('newSite', function($http, $compile, wpOptions, Data, toggleStateService, offCanvasService) {
    return {
      restrict:"A",
      scope:{},
      link: function(scope, element, attrs) {

        scope.Data = Data;
        scope.options = angular.copy(wpOptions);
        console.log(wpOptions)
        scope.offCanvasService = offCanvasService;
        console.log(scope)


        scope.addItem = function(obj, location) {
          location.push(angular.copy(obj))
        }

        scope.createSite = function() {
          if(scope.options.themes[0])
          scope.options.image = scope.options.themes[0].image;
          console.log(scope.options)

          Data.sites.mySites.push(angular.copy(scope.options));



          offCanvasService.showDetail = !offCanvasService.showDetail;
          offCanvasService.detail.template = 'app/templates/modals/site.detail.html';
          offCanvasService.detail.input = angular.copy(scope.options);
          offCanvasService.detail.output = [];
          scope.$apply();

                    scope.options = angular.copy(wpOptions);


        }



      }
    
    }
  });