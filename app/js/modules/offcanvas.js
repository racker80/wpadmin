
angular.module('myApp.offcanvas', [])

  .service('offCanvasService', function(){
    var ths = this;
    this.template = '';
    
    this.show = function(template) {
      ths.showOffCanvas = !ths.showOffCanvas;
      ths.template = template;
    }
  })


  .directive('offCanvas', function($animate, $rootScope, $http, $compile, $window, offCanvasService){
    return {
        restrict:"A",
        controller: function($scope) {
            $scope.offCanvasService = offCanvasService;
        },
        link:function(scope, element, attrs) {
            var offCanvasSlider = element.find('#offCanvasSlider').height($window.height);            
            var offCanvasContent = element.find('#offCanvasContent').height($window.height);
            var offCanvasSidebar = element.find('#offCanvasSidebar').height($window.height);

            scope.$watch('offCanvasService.showOffCanvas', function(){
                if(scope.offCanvasService.showOffCanvas == true) {
                    $('#offCanvasSlider').bind('click', function(e){
                        if(e.target === angular.element('#offCanvasSlider')[0]) {
                            scope.offCanvasService.showOffCanvas = false;
                            scope.$apply();
                        }

                    })
                } else {
                    $('#offCanvasSlider').unbind('click');
                    scope.sidebar = false;
                    scope.$apply();
                }
            });

            scope.$watch('offCanvasService.template', function(){
                if(scope.offCanvasService.template) {
                    $http.get(scope.offCanvasService.template).then(function(tmpl) {
                       var template = $compile(tmpl.data)(scope);
                       element.find('#offCanvasContent').html(template);
                   });
                }

            })

            
        }
    }
});