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


myApp.directive('wpSearch', function($http, $rootScope, $q){
    return {
        restrict:'A',
        controller:function($scope){

        },
        link:function(scope, element, attrs) {
            // scope.myPlugins = angular.fromJson(localStorageService.get('myPlugins'));

            scope.search = function(){
                $http.get('search.php', {
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
