
angular.module('myApp.offcanvas', [])

  .service('offCanvasService', function(){
    var ths = this;
    this.template = '';
    this.output;

    this.show = function(template) {
      ths.showOffCanvas = !ths.showOffCanvas;
      ths.template = template;
    }
    this.sidebar = function(template, output) {
        console.log(output)
        ths.showSidebar = !ths.showSidebar;
        ths.sidebarTemplate = template;
        ths.output = output;
    }
  })


.directive('offCanvas', function($animate, $rootScope, $http, $compile, $window, offCanvasService, Data){
    return {
        restrict:"A",
        scope: {
            offCanvas:"="
        },
        controller: function($scope) {
            $scope.offCanvasService = offCanvasService;
            $scope.output = [];
            $scope.Data = Data;
        },
        link:function(scope, element, attrs) {
             console.log($window.innerHeight)
             var h;
             angular.element(window).on('resize',function(){
                h = $window.innerHeight;
                console.log(h)
             })

            var offCanvasSlider = element.find('#offCanvasSlider').height(h);            
            var offCanvasContent = element.find('#offCanvasContent').height(h);
            var offCanvasSidebar = element.find('#offCanvasSidebar').height(h);


            scope.$watch('offCanvasService.showOffCanvas', function(){
                if(scope.offCanvasService.showOffCanvas == true) {
                    $('#offCanvasSlider').bind('click', function(e){
                        if(e.target === angular.element('#offCanvasSlider')[0]) {
                            scope.offCanvasService.showOffCanvas = false;
                            scope.$apply();
                        }

                    })
                } 
                if(scope.offCanvasService.showOffCanvas == false) { 
                    $('#offCanvasSlider').unbind('click');
                    scope.sidebar = false;
                }
            });
   
        }
    }
})
.directive('offCanvasContent', function($http, $compile){
    return function(scope, element, attrs){

        scope.$watch('offCanvasService.template', function(){
                if(scope.offCanvasService.template) {
                    $http.get(scope.offCanvasService.template).then(function(tmpl) {
                       var template = $compile(tmpl.data)(scope);
                       element.html(template);
                   });
                }

            })

        scope.$watch('offCanvasService.showSidebar', function(){
                if(scope.offCanvasService.showSidebar == true) {

                    $('#offCanvasContent').bind('click', function(e){
                        console.log(e.target)
                        if(e.target === angular.element('#offCanvasContent')[0]) {
                            scope.offCanvasService.showSidebar = false;
                            scope.$apply();
                        }

                    })
                } 
                if(scope.offCanvasService.showSidebar == false) { 
                    $('#offCanvasContent').unbind('click');
                    
                }
            });
    }
})
.directive('sidebarDirective', function(offCanvasService){
    return {
        restrict:"A",
        scope:{
            output:"=",
            template:"@",
        },
        link:function(scope, element, attrs) {
            scope.offCanvasService = offCanvasService;
            console.log(scope)
            element.click(function(){
                offCanvasService.showSidebar = !offCanvasService.showSidebar;
                offCanvasService.sidebarTemplate = scope.template;
                offCanvasService.output = scope.output;
                scope.$apply()
            })
        }

    }
})
.directive('offCanvasSidebar', function($http, $compile){
    return function(scope, element, attrs){

        scope.$watch('offCanvasService.sidebarTemplate', function(){
                if(scope.offCanvasService.sidebarTemplate) {
                    $http.get(scope.offCanvasService.sidebarTemplate).then(function(tmpl) {
                       var template = $compile(tmpl.data)(scope);
                       element.html(template);
                       scope.output = scope.offCanvasService.output;
                   });
                }

            })
    }
});