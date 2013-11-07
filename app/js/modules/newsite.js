
angular.module('myApp.newsite', [])

.factory('wpOptions', function(){
	return {
		url:'',
		pages:[],
        themes:[],
        plugins:[],
        users:[],
        menus:[],
        options:[],
	}
})



.directive('newSite', function($http, $compile, wpOptions, Data, toggleStateService, offCanvasService) {
    return {
      restrict:"A",
      scope:{},
      link: function(scope, element, attrs) {
        scope.Data = Data;
        scope.options = wpOptions;
        scope.offCanvasService = offCanvasService;
        console.log(scope)
      }
    
    }
  });