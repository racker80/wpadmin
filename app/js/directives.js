'use strict';

/* Directives */


angular.module('myApp.directives', []).

  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  
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

  .directive('easyPie', function($location){
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
                    $location.url('/sites/detail');
                    $scope.$apply();
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
