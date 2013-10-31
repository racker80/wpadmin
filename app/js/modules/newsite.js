
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

.directive('modalDirective', function($http, $compile, Data){
	return {
		restrict:"A",
		scope:{
			template:"@",
			title:"@",
			modalId:"@",
			output:"="
		},
		link:function(scope, element, attrs){
			var template;
      		var modal = scope.template;
      		scope.Data = Data;

      		element.click(function(){
      			$http.get(modal).then(function(tmpl) {
      				template = $compile(tmpl.data)(scope);
      				template.attr('id', scope.modalId)
      				element.after(template);

      				var theModal = $('#'+template.attr('id')).modal('show');

      				theModal.on('hidden.bs.modal', function(){
      					theModal.remove();
      				});

      			});
      		})

		}
	}
})

.directive('newSite', function($http, $compile, wpOptions, Data) {
    return function(scope, element, attrs) {
    	scope.Data = Data;
      	scope.options = wpOptions;
      	

    };
  
  });