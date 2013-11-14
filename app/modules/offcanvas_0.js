
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
.directive('offCanvasContainer', function($animate, $rootScope, $http, $compile, $window, offCanvasService, Data){
    return {
        restrict:"A",
        scope: {
        },
        controller: "offCanvasController",
        link:function(scope, element, attrs, controller) {



            var contentClick = function(){
                $('#content').bind('click', function(e){
                        if(e.target === angular.element('#content')[0]) {
                            offCanvasService.showDetail = false;
                            offCanvasService.showOption = false;
                            $('#content').unbind('click');
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

            scope.$watch(function(){
                return offCanvasService.showDetail
            }, function(d){
                scope.showDetail = d;
                if(d == true) {
                    contentClick();                
                }

            })
            scope.$watch(function(){
                return offCanvasService.showOption
            }, function(d){
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
            if(scope.text) {
                element.empty().append(scope.text)
            }

            element.click(function(){
                offCanvasService.showDetail = !offCanvasService.showDetail;
                offCanvasService.showOverlay = !offCanvasService.showOverlay;
                offCanvasService.detail.template = scope.template;
                offCanvasService.detail.input = scope.input;
                offCanvasService.detail.output = scope.output;
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
.animation('.showDetail', function(offCanvasService) {
   
  return {
    enter : function(element, done) {
      // jQuery(element).css({
      //   color:'#FF0000'
      // });
      // jQuery(element).animate({
      //   color:'#0000FF'
      // }, done);
      return function(cancelled) {
        /* this (optional) function is called when the animation is complete
           or when the animation has been cancelled (which is when
           another animation is started on the same element while the
           current animation is still in progress). */
        if(cancelled) {
          jQuery(element).stop();
        }
      }
    },

    leave : function(element, done) { done(); },
    move : function(element, done) { done(); },
    addClass : function(element, className, done) { 
        alert('whaatalksdj')
        done(); 
    },
    removeClass : function(element, className, done) { 

                    alert('removing detail class')
  
        done(); 
    }
  };
})
.directive('offCanvasOverlay', function(offCanvasService){
    return {
        link: function(scope, element,attrs) {
        scope.$watch(function(){
                return offCanvasService.showOverlay
            }, function(t) {
                scope.showOffCanvas = offCanvasService.showOverlay;
            });
        }
    }
})
.directive('offCanvasContent', function($http, $compile, offCanvasService){
    return {
        link: function(scope, element, attrs){


            scope.$watch(function(){
                return offCanvasService.showDetail
            }, function(t) {
                if(t==true) {
                    element.html('');
                    scope.output = offCanvasService.detail.output;
                    scope.input = offCanvasService.detail.input;
                    if(offCanvasService.detail.template) {
                        $http.get(offCanvasService.detail.template).then(function(tmpl) {
                         var template = $compile(tmpl.data)(scope);
                         element.html(template);
                     });
                    }

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
            element.sparkline( $data.data || "html", $data);
        }
    }
})

.directive('offCanvasSidebar', function($http, $compile, offCanvasService){
    return function(scope, element, attrs){
        scope.close = function(){
            $('#content').click();
        }

        scope.uploadFile = function(){
            scope.output.push(scope.Data.wordpress.themes[0]);
            scope.addFile = !scope.addFile;
        }

        scope.addWPUser = function(obj){
          console.log(scope)
          scope.output.push(obj);
          scope.user = {};
        }

        scope.$watch(function(){
            return offCanvasService.showOption
        }, function(t) {
            scope.output = offCanvasService.option.output;
            scope.input = offCanvasService.option.input;

            if(t == true)
                $http.get(offCanvasService.option.template).then(function(tmpl) {
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








                
.animation('.showDetail', function(offCanvasService) {
   
  return {
    enter:function(element, done) {
                var content = angular.element('#content');
        var l = ($(window).width()-content.position().left)-180
        var t = 5.5;

        jQuery(element).width(content.width()-180)
        console.log('test')
        element.scope().style = {
            '-webkit-transition': 'all cubic-bezier(0.250, 0.460, 0.450, 0.940) '+t+'s',
            '-webkit-transform': 'translate3d(-'+l+'px, 0px, 0)'
        }
        element.scope().$apply();


        return function(cancelled) {

            console.log('done')
            
        }
    },
    leave : function(element, done) { 
        console.log('leave')
        var t = 0.5;        
        element.scope().style = {
            '-webkit-transition': 'all cubic-bezier(0.250, 0.460, 0.450, 0.940) '+t+'s',
            '-webkit-transform': 'translate3d(0px, 0px, 0)'
        }
        done();

    },
    addClass : function(element, className, done) {
        // if(className == 'disabled') {
        //  jQuery(element).animate({
        //      'color':'#666666',
        //      'background':'#AAAAAA'
        //  }, done);
        // }
        // else {
        //  done();
        // }
        console.log('adding animation');

        var content = angular.element('#content');
        var l = ($(window).width()-content.position().left)-180
        var t = 0.5;

        jQuery(element).width(content.width()-180)
        // element.transition({ 
        //  left:content.position().left+180
        // });
        // element.scope().style = {
        //  '-webkit-transition': 'all cubic-bezier(0.250, 0.460, 0.450, 0.940) '+t+'s',
        //  '-webkit-transform': 'translate3d(-'+l+'px, 0px, 0)'
        // }

        done();
        // $(element).animate({
        //  '-webkit-transform': 'translate3d(-900px, -30px, 0)',
    //       'color':'#666666',
    //     }, done);
    },

    removeClass : function(element, className, done) {
        // var t = 0.5;
        // element.scope().style = {
        //  '-webkit-transition': 'all cubic-bezier(0.250, 0.460, 0.450, 0.940) '+t+'s',
        //  '-webkit-transform': 'translate3d(0px, 0px, 0)'
        // }
        // var t = 0.5;         
        // element.scope().style = {
        //  '-webkit-transition': 'all cubic-bezier(0.250, 0.460, 0.450, 0.940) '+t+'s',
        //  '-webkit-transform': 'translate3d(0px, 0px, 0)'
        // }
        done();
    }
  };
})