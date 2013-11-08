
angular.module('myApp.offcanvas', [])

  .service('offCanvasService', function(){
    var ths = this;
    this.detail = {};
    this.option = {};
    this.showDetail = false;
    this.toggleDetail = function(object){
        ths.detail = object;
        ths.showDetail = !ths.showDetail;
        
    }



  })

.controller('offCanvasController', function($animate, $scope, $rootScope, $http, $compile, $window, offCanvasService, Data){
    $scope.Data = Data;


})
.directive('offCanvas', function($animate, $rootScope, $http, $compile, $window, offCanvasService, Data){
    return {
        restrict:"A",
        scope: {
        },
        controller: "offCanvasController",
        link:function(scope, element, attrs, controller) {
             var h;
             angular.element(window).on('resize',function(){
                h = $window.innerHeight;
             })

            var offCanvasSidebar = element.find('#offCanvasSidebar').height(h);


            var contentClick = function(){
                $('#content').addClass('showOffCanvas').bind('click', function(e){
                        if(e.target === angular.element('#content')[0]) {
                            offCanvasService.showDetail = false;
                            offCanvasService.showOption = false;
                            $('#content').removeClass('showOffCanvas').unbind('click');
                            scope.$apply();
                        }

                    })
            }
            var canvasContentClick = function() {
                $('#offCanvasContent').bind('click', function(e){
                        if(e.target === angular.element('#offCanvasContent')[0]) {
                            offCanvasService.showOption = false;
                            $('#offCanvasContent').unbind('click');
                            scope.$apply();
                        }

                    })
            }

            scope.$watch(function(){return offCanvasService.showDetail}, function(d){
                scope.showDetail = d;

                if(d == true) {
                    contentClick();                
                }

            })
            scope.$watch(function(){return offCanvasService.showOption}, function(d){
                scope.showOption = d;
                if(d == true && offCanvasService.showDetail == true) {
                      canvasContentClick();                    
                }
                if(d == true && offCanvasService.showDetail == false) {
                    contentClick();      
                }                
            });
   
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
        link:function(scope, element, attrs, controller) {
            console.log(scope.text)
            if(scope.text) {
                element.empty().append(scope.text)
            }
            element.click(function(){
                offCanvasService.showDetail = !offCanvasService.showDetail;
                offCanvasService.detail.template = scope.template;
                scope.$apply();
            })
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
            element.click(function(){
                offCanvasService.showOption = !offCanvasService.showOption;
                offCanvasService.option = {
                    template: scope.template,
                    output:scope.output,
                    input:scope.input,
                }
                scope.$apply();
            })
        }

    }
})

.directive('offCanvasContent', function($http, $compile, offCanvasService){
    return {
        link: function(scope, element, attrs){
            scope.output = [];

            scope.$watch(function(){
                return offCanvasService.detail.template
            }, function(t) {
                element.html('');
                scope.output = offCanvasService.detail.output;
                scope.input = offCanvasService.detail.input;
                if(t)
                    $http.get(t).then(function(tmpl) {
                       var template = $compile(tmpl.data)(scope);
                       element.html(template);
                   });
            });

        }
    }
})

.directive('offCanvasSidebar', function($http, $compile, offCanvasService){
    return function(scope, element, attrs){
        scope.$watch(function(){
            return offCanvasService.option.template
        }, function(t) {
            scope.output = offCanvasService.option.output;
            scope.input = offCanvasService.option.input;

            if(t)
                $http.get(t).then(function(tmpl) {
                   var template = $compile(tmpl.data)(scope);
                   element.html(template);
               });
        });


    }
});









        // scope.$watch('offCanvasService.showSidebar', function(){
        //         if(scope.offCanvasService.showSidebar == true) {

        //             $('#offCanvasContent').bind('click', function(e){
        //                 console.log(e.target)
        //                 if(e.target === angular.element('#offCanvasContent')[0]) {
        //                     scope.offCanvasService.showSidebar = false;
        //                     scope.$apply();
        //                 }

        //             })
        //         } 
        //         if(scope.offCanvasService.showSidebar == false) { 
        //             $('#offCanvasContent').unbind('click');
                    
        //         }
        //     });





                // if(scope.oc.detail.show == true) {
                //     console.log(oc)
                //     $('#content').bind('click', function(e){
                //         if(e.target === angular.element('#offCanvasSlider')[0]) {
                //             scope.oc.detail = {};
                //             scope.$apply();
                //         }

                //     })
                // }