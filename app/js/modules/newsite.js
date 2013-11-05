
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



.directive('newSite', function($http, $compile, wpOptions, Data, toggleStateService) {
    return function(scope, element, attrs) {
    	scope.Data = Data;
      	scope.options = wpOptions;

        scope.$watch('toggleState.offCanvasModal', function(){
        })
    };
  
  });