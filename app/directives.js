'use strict';

/* Directives */


angular.module('myApp.directives', []).

  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

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
            scope.Data = Data;

            element.click(function(){
                var template;
                var modal = scope.template;
            
                $http.get(modal).then(function(tmpl) {
                    template = $compile(tmpl.data)(scope);
                    template.attr('id', scope.modalId)
                    // element.after(template);
                    angular.element('body').append(template);

                    var theModal = $('#'+template.attr('id')).modal('show');

                    theModal.on('hidden.bs.modal', function(){
                        theModal.remove();
                    });

                });
            })

        }
    }
})



  
  .directive('bs', function($location) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
                elem.on('click', function(e){
                    e.preventDefault();
                });
        }
    };
  })

  .directive('pageDirective', function(Data) {
    return {
        restrict:'A',
        link:function(scope, elm, attrs) {
            scope.pages = Data.pages;
            scope.addPage = function(){
                scope.pages.push(scope.pageName);
                return true;
            }
        }
    }
  })

  .directive('selectTags', function(Data){
    return {
        restrict:"A",
        link:function($scope, elm, attrs) {
            $('.select2-container').select2({tags:Data.wordpress.bundles});
        }
    }
  })

 .directive('checkList', function(Data) {
  return {
    scope: {
      list: '=checkList',
      value: '@'
    },
    link: function(scope, elem, attrs) {

      var handler = function(setup) {
        var checked = elem.prop('checked');
        var index = scope.list.indexOf(scope.value);

        if (checked && index == -1) {
          if (setup) elem.prop('checked', false);
          else scope.list.push(angular.fromJson(scope.value));
        } else if (!checked && index != -1) {
          if (setup) elem.prop('checked', true);
          else scope.list.splice(index, 1);
        }
        console.log(scope.list);
      };
      
      var setupHandler = handler.bind(null, true);
      var changeHandler = handler.bind(null, false);
            
      elem.on('change', function() {
        scope.$apply(changeHandler);
      });
      scope.$watch('list', setupHandler, true);
    }
  };
})

  .directive('easyPie', function($location, $rootScope){
    return {
        restrict:'A',
        link:function($scope, elm, attrs) {

                // easypie
                var updatePie = function($that) {
                    var $this = $that, 
                    $newValue = Math.round(100*Math.random());      
                    $this.data('easyPieChart').update($newValue);
                };

                var viewDetail = function(){
                    $location.url('/sites/');
                    $scope.$apply();
                    $rootScope.viewNewSite();
                }

                $('.easypiechart').each(function(){
                    var $barColor = $(this).data("barColor") || function($percent) {
                        $percent /= 100;
                        return "rgb(" + Math.round(255 * (1-$percent)) + ", " + Math.round(255 * $percent) + ", 125)";
                    },
                    $trackColor = $(this).data("trackColor") || "#c8d2db",
                    $scaleColor = $(this).data("scaleColor"),
                    $lineWidth = $(this).data("lineWidth") || 12,
                    $size = $(this).data("size") || 130,
                    $animate = $(this).data("animate") || 5000;

                    $(this).easyPieChart({
                        barColor: $barColor,
                        trackColor: $trackColor,
                        scaleColor: $scaleColor,
                        lineCap: 'butt',
                        lineWidth: $lineWidth,
                        size: $size,
                        animate: $animate,
                        onStop: function(){
                            var $this = this.$el;
                            $this.data("loop") && setTimeout(function(){ $this.data("loop") && updatePie($this) }, 6000);  
                            viewDetail();
                            
                        },
                        onStep: function(value) {
                          this.$el.find('span').text(parseInt(value));
                      }
                  });
                });



        }
    }
  })

// .directive('newSite', function(){
//     return {
//         restrict:'A',
//         scope: {},
//         controller:function($scope, $element, $attrs, Data){
//             $scope.Data = Data;
//             $scope.newsite = angular.copy(Data.wordpress.defaults);


//             $scope.addItem = function(item, location){
//                 location.push(item);
//                 item = "";
//             }            

//             $scope.addThemes = function(list) {
//                 angular.each(list, function(value, index, context){
//                   console.log(value);
//               });
//             }
//         },
//         link:function(scope){
//             angular.forEach(scope.Data.modal, function(value, key){
//                 scope.$watch('Data.modal.'+key, function(v){
//                   scope.newsite[key] = angular.copy(scope.Data.modal[key]);
//                   console.log(scope.Data.modal[key])

//                 }, true);
//             });
//         }
//     }
// });

myApp.directive('wpSearch', function($http, $rootScope, $q, Data){
    return {
        restrict:'A',
        controller:function($scope){

        },
        link:function(scope, element, attrs) {
            // scope.myPlugins = angular.fromJson(localStorageService.get('myPlugins'));

            scope.search = function(){
                $http.get('app/search.php', {
                    params: {
                        type:'search',
                        value:scope.searchField,
                        action: 'query_plugins'
                    }
                }).success(function(response){
                    console.log(response)
                    scope.plugins = response;
                });

            }

            scope.add = function(plugin){
                Data.wordpress.plugins.push(plugin);
                // scope.myPlugins.push(plugin);
                // localStorageService.add('myPlugins', angular.toJson(scope.myPlugins));
                // console.log('added plugin')
            }

            scope.clear = function(){
                scope.plugins = [];
            }


        }
    }
});
