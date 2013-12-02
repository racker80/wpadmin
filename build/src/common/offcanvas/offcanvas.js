angular.module('offcanvas', [])

.factory('offCanvasService', function(){
    var service = {
        options: {
        },
        toggle: function(item) {
            if(angular.isUndefined(service.options[item]) ){ 
                service.options[item] = false;
            }
            service.options[item] = !service.options[item];
        }
    };

    return service;
})




.directive('offCanvasContainer', function($rootScope, $http, $compile, $window, offCanvasService){
    return {
        restrict:"A",
        scope:true,
        controller:function($scope){
            $scope.options=offCanvasService.options;
        },
        link:function (scope, element, attrs) {
            
        }
    };
})




.directive('ocShowDetail', function(offCanvasService, $rootScope){
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
                element.empty().append(scope.text);
            }
            element.click(function(e){
                offCanvasService.toggle('showDetail');                
                offCanvasService.toggle('showOverlay');  

                offCanvasService.detail = {
                    output:scope.output,
                    input:scope.input,
                    template:scope.template
                };

                scope.$apply();
                e.preventDefault();
            });

        }

    };
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
                element.empty().append(scope.text);
            }

            element.click(function(e){
                
                offCanvasService.toggle('showOption');
                offCanvasService.toggle('showOverlay');                
                console.log(offCanvasService);
                if(angular.isUndefined(scope.output)) {
                    scope.output = [];
                }
                if(angular.isUndefined(scope.input)) {
                    scope.input = [];
                }

                offCanvasService.detail = {
                    output:scope.output,
                    input:scope.input,
                    template:scope.template
                };

                scope.$apply();
                e.preventDefault();
            });
        }

    };
})

.directive('offCanvasContent', function($http, $compile, $templateCache, offCanvasService, User){
    return {
        restrict:"A",
        controller:function($scope) {
            $scope.detail = offCanvasService.detail;
            $scope.User = User;
        },
        link: function(scope, element, attrs){
            var template = $templateCache.get(scope.detail.template);
            var tpl = $compile(template)(scope);
            element.html(tpl);

        }
    };
})

.directive('offCanvasSidebar', function($http, $compile, $templateCache, offCanvasService, User){
    return {
        restrict:"A",
        controller:function($scope) {
            $scope.detail = offCanvasService.detail;
            $scope.User = User;            
        },
        link: function(scope, element, attrs){
            var template = $templateCache.get(scope.detail.template);
            var tpl = $compile(template)(scope);
            element.html(tpl);

            scope.$watch('detail.output', function(output){
                console.log(output);
            });

        }
    };
})


.directive('offCanvasOverlay', function(offCanvasService){
    return {
        controller:function($scope) {
            $scope.offCanvas = offCanvasService.options;
        },
        link: function(scope, element,attrs) {
            

        }
    };
})


.animation('.toggle-detail-animation', function($rootScope, offCanvasService){
    var t = 0.2;
    var l = function(){
        return $('#content').width() - 180;
    };
    var lFixed = function(){
        return $('#nav').width()+180;
    };
    return {
        enter: function(element, done){
            TweenMax.fromTo(element, t, {
                transform:'translate3d(0, 0, 0)'
            }, {
                transform:'translate3d(-'+l()+'px, 0, 0)',
                onComplete:function(){
                    TweenMax.to(element, 0, {
                        left:lFixed(),
                        transform:'translate3d(0,0,0)',
                        onComplete:done
                    });
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
    };
})
.animation('.toggle-option-animation', function($rootScope, offCanvasService){
    var t = 0.2;
    var l = function(){
        return $('#content').width() - 380;
    };
    var lFixed = function(){
        return $('#nav').width()+380;
    };
    return {
        enter: function(element, done){
            TweenMax.fromTo(element, t, {
                transform:'translate3d(0, 0, 0)'
            }, {
                transform:'translate3d(-'+l()+'px, 0, 0)',
                onComplete:function(){
                    TweenMax.to(element, 0, {
                        left:lFixed(),
                        transform:'translate3d(0,0,0)'
                    });
                    return done;
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
                        transform:'translate3d(0,0,0)'
                    });
                    return done;
                }
            });
        }
    };
})
.animation('.showOffCanvas', function($rootScope, offCanvasService){
    var overlay = $('<div id="contentOverlay"></div>');
    var t = 0.2;
    var binding = function(e){
        if(e.target === angular.element(overlay)[0]) {
            offCanvasService.options.showOverlay = false;  
            offCanvasService.options.showDetail = false;  
            offCanvasService.options.showOption = false;  
            overlay.unbind('click');
            $rootScope.$apply();
        }
    };

    return {
        addClass: function(element, done){

            overlay.bind('click', function(e){
                binding(e);
            })
            .appendTo(element);

            TweenMax.fromTo(angular.element(overlay)[0], t, {
                opacity:0
            }, {
                opacity:0.2, 
                onComplete:function(){
                    return done;
                }
            });
        },
        removeClass: function(element, done){
            TweenMax.fromTo(overlay, t, {
                opacity:0.2
            }, {
                opacity:0, 
                onComplete:function(){
                    overlay.remove();
                    return done;
                }
            });
        }
    };
})

;






