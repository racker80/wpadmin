var app = angular.module('app', []);

app.directive('wpSearch', function($http, $rootScope, $q){
    return {
        restrict:'A',
        controller:function(){


        },
        link:function(scope, element, attrs) {
            scope.plugins = []

            console.log(scope.plugins)
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

            scope.clear = function(){
                scope.plugins = [];
            }


        }
    }
})