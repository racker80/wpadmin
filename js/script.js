var app = angular.module('app', ['LocalStorageModule']);



app.directive('wpSearch', function($http, $rootScope, $q, localStorageService){
    return {
        restrict:'A',
        controller:function($scope){

        },
        link:function(scope, element, attrs) {
            scope.myPlugins = angular.fromJson(localStorageService.get('myPlugins'));

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
                scope.myPlugins.push(plugin);
                localStorageService.add('myPlugins', angular.toJson(scope.myPlugins));
                console.log('added plugin')
            }

            scope.clear = function(){
                scope.plugins = [];
            }


        }
    }
})


