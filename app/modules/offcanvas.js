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
.animation('.showOffCanvas', function($rootScope, offCanvasService){
    var overlay = $('<div id="contentOverlay"></div>');
    var t = .2;
    var binding = function(e){
        if(e.target === angular.element(overlay)[0]) {
            offCanvasService.showDetail = false;
            offCanvasService.showOption = false;
            offCanvasService.showOffCanvas = false;
            // offCanvasService.showOption = false;
            overlay.unbind('click');
            $rootScope.$apply();
        }
    }
    return {
        addClass: function(element, done){
            
            overlay.bind('click', function(e){binding(e)})
            .appendTo(element);

            TweenMax.fromTo(angular.element(overlay)[0], t, {
                opacity:0,
            }, {
                opacity:.2, 
                onComplete:function(){
                    done;
                }
            });
        },
        removeClass: function(element, done){
            TweenMax.fromTo(overlay, t, {
                opacity:.2
            }, {
                opacity:0, 
                onComplete:function(){
                    overlay.remove();
                    done;
                }
            });
        }
    }
})
.animation('.showOption', function($rootScope, offCanvasService){
    var overlay = $('<div id="detailOverlay"></div>');
    var t = .2;

    var binding = function(e, element){
        if(e.target === angular.element(overlay)[0]) {
            offCanvasService.showOption = false;
            overlay.unbind('click');
            console.log(element.scope)
        }
    }
    return {
        addClass: function(element, done){
            overlay.bind('click', function(e){
                if(e.target === angular.element(overlay)[0]) {
                    offCanvasService.showOption = false;
                    overlay.unbind('click');
                    $rootScope.$apply();
                    // element.scope().$apply();
                }

            })
            .appendTo(element);

            TweenMax.fromTo(overlay, t, {
                opacity:0,
            }, {
                opacity:.2, 
                onComplete:function(){
                    done;
                }
            });
            TweenMax.to(element, t, {
                transform:'translate3d(-180px, 0, 0)'
            });
        },
        removeClass: function(element, done){
            TweenMax.to(element, t, {
                transform:'translate3d(0px, 0, 0)'
            });
            TweenMax.fromTo(overlay, t, {
                opacity:.2
            }, {
                opacity:0, 
                onComplete:function(){
                    console.log('done')
                    overlay.remove();
                    done;
                }});
        }
    }
})
.animation('.toggle-detail-animation', function($rootScope, offCanvasService){
    var t = .2;
    var l = function(){
        return $('#content').width() - 180;
    }
    var lFixed = function(){
        return $('#nav').width()+180;
    }
    return {
        enter: function(element, done){
            TweenMax.fromTo(element, t, {
                transform:'translate3d(0, 0, 0)',
            }, {
                transform:'translate3d(-'+l()+'px, 0, 0)',
                onComplete:function(){
                    TweenMax.to(element, 0, {
                        left:lFixed(),
                        transform:'translate3d(0,0,0)',
                        onComplete:done
                    })
                }
            });
        },
        leave: function(element, done) {
            TweenMax.fromTo(element, t, {
                transform:'translate3d(0, 0, 0)'
            }, {
                transform:'translate3d(100%, 0, 0)',
                onComplete:function(){
                    TweenMax.to(element, t, {
                        left:'100%',
                        transform:'translate3d(0,0,0)',
                        onComplete:done
                    });
                }
            });
        }
    }
})

.animation('.toggle-option-animation', function($rootScope, offCanvasService){
    var t = .2;
    var l = function(){
        return $('#content').width() - 380;
    }
    var lFixed = function(){
        return $('#nav').width()+380;
    }
    return {
        enter: function(element, done){
            TweenMax.fromTo(element, t, {
                transform:'translate3d(0, 0, 0)',
            }, {
                transform:'translate3d(-'+l()+'px, 0, 0)',
                onComplete:function(){
                    TweenMax.to(element, 0, {
                        left:lFixed(),
                        transform:'translate3d(0,0,0)',
                        onComplete:done
                    })
                }
            });
        },
        leave: function(element, done) {
            TweenMax.fromTo(element, t, {
                transform:'translate3d(0, 0, 0)'
            }, {
                transform:'translate3d(100%, 0, 0)',
                onComplete:function(){
                    TweenMax.to(element, t, {
                        left:'100%',
                        transform:'translate3d(0,0,0)',
                        onComplete:done
                    });
                }
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
                // element.bind('click', function(e){
                //     if(e.target === angular.element('#offCanvasContent')[0]) {
                //         offCanvasService.showOption = false;
                //         element.unbind('click');
                //         scope.$apply();
                //     }
                // })
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

        	// scope.$watch('showOption', function(result){

        	// 	if(result==true) {
         //            scope.showOption = true;
        	// 		console.log('and show option')
         //            // binding();
        	// 	} 
         //        if(result==false) {
         //            scope.showOption = false;
        	// 		console.log('turn it off!')
     			
        	// 	}
        	// });
            scope.$watch(function(){
                return offCanvasService.showOption;
            }, function(showOption){
                scope.showOption = showOption;
            })

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






