angular.module('myApp.offcanvas', [])

.service('offCanvasService', function(){

	return this;

})

.directive('offCanvasContainer', function($animate, $rootScope, $http, $compile, $window, offCanvasService, Data){
    return {
        restrict:"A",
        scope: {
        },
        controller: function($scope){
        	$scope.Data = Data;
        },
        link:function(scope, element, attrs) {
   			scope.$watch(function(){
   				return offCanvasService.showDetail;
   			}, function(showDetail){
                scope.showDetail = showDetail;
   			});

   			scope.$watch(function(){
   				return offCanvasService.showOption;
   			}, function(showOption){
                scope.showOption = showOption;
   			})


        }
    }
})

.directive('ocShowDetail', function(offCanvasService){
    return {
        restrict:"A",
        scope:{
            output:"=",
            input:"=",
            template:"@",
            text:"@"
        },
        link:function(scope, element, attrs) {
        	if(scope.text) {
                element.empty().append(scope.text)
            }
        	element.click(function(e){
                offCanvasService.showDetail = !offCanvasService.showDetail;
                offCanvasService.showOffCanvas = true;
        		offCanvasService.detail = {
        			output:scope.output,
        			input:scope.input,
        			template:scope.template
        		}
        		scope.$apply();
                e.preventDefault();

        	});
        }

    }
})

.directive('ocShowOption', function(offCanvasService){
    return {
        restrict:"A",
        scope:{
            output:"=",
            input:"=",
            template:"@",
            text:"@"            
        },
        link:function(scope, element, attrs) {
        	if(scope.text) {
        		element.empty().append(scope.text)
        	}

        	element.click(function(e){
        		offCanvasService.showOption = !offCanvasService.showOption;
                offCanvasService.showOffCanvas = true;
        		offCanvasService.option = {
        			output:scope.output,
        			input:scope.input,
        			template:scope.template
        		}
        		scope.$apply();
                e.preventDefault();

        	});
        }

    }
})

.directive('offCanvasOverlay', function(offCanvasService){
    return {
        link: function(scope, element,attrs) {
        	var resizeTimer;
        	$(window).resize(function() {
        		clearTimeout(resizeTimer);
        		resizeTimer = setTimeout(function(){
        			offCanvasService.contentWidth = element.width();
        			scope.$apply();
        		}, 100);
        	});

            //Watch for a detail object
        	scope.$watch(function(){
   				return offCanvasService.showOffCanvas;
   			}, function(showOffCanvas){
   				scope.showOffCanvas = showOffCanvas;
   			})

            var bind = function(){
                element.bind('click', function(e){
                        if(e.target === angular.element('#content')[0]) {
                            offCanvasService.showDetail = false;
                            offCanvasService.showOption = false;
                            offCanvasService.showOffCanvas = false;
                            // offCanvasService.showOption = false;
                            element.unbind('click');
                            scope.$apply();
                        }

                    });
            }

   			scope.$watch('showOffCanvas', function(showOffCanvas){
   				if(showOffCanvas == true) {
   					bind();
   				} else {

   				}
   			})
        }
    }
})
.directive('offCanvasContent', function($http, $compile, $window, offCanvasService){
    return {
        link: function(scope, element, attrs){
        	var load = function(){
        		scope.output = offCanvasService.detail.output;
        		scope.input = offCanvasService.detail.input;
        		$http.get(offCanvasService.detail.template).then(function(tmpl) {
        			var template = $compile(tmpl.data)(scope);
        			element.html(template);
        		});
        	}
        	var test = function(){
        		// var c = $('#content');
        		// var l = ($(window).width()-c.position().left)-180
        	}

            var binding = function(){
                element.bind('click', function(e){
                    if(e.target === angular.element('#offCanvasContent')[0]) {
                        offCanvasService.showOption = false;
                        element.unbind('click');
                        scope.$apply();
                    }
                })
            }

        	scope.$watch('showDetail', function(showDetail){
        		if(showDetail==true){
        			load();
        			test();
        		}	
        	})

        	// scope.$watch(function(){
        	// 	return offCanvasService.contentWidth
        	// }, function(w) {

        	// });

        	scope.$watch('showOption', function(result){
        		if(result==true) {
                    scope.optionIn = true;
        			console.log('and show option')
                    binding();
        		} 
                if(result==false) {
                    scope.optionIn = false;
        			console.log('turn it off!')
     			
        		}
        	});

        }
    }
})
.directive('sparkline', function(){
    return {
        restrict:"C",
        link:function(scope, element, attrs){
            var $data = element.data();
            element.sparkline( $data.data || element, $data);
        }
    }
})

.directive('offCanvasSidebar', function($http, $compile, offCanvasService){
    return function(scope, element, attrs){
        scope.close = function(){
            offCanvasService.showOption=false;
            offCanvasService.showOffCanvas=false;
            
            scope.$apply();
        }

        scope.$watch('showOption', function(showOption){
            var load = function(){
                scope.output = offCanvasService.option.output;
                scope.input = offCanvasService.option.input;
                $http.get(offCanvasService.option.template).then(function(tmpl) {
                    var template = $compile(tmpl.data)(scope);
                    element.html(template);
                });
            }

            if(showOption==true){
                console.log('showOption '+showOption)
                load();
            }  

        })
            
        scope.addWPUser = function(obj){
          console.log(scope)
          scope.output.push(obj);
          scope.user = {};
      }

    }
});






