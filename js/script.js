var app = angular.module('app', ['LocalStorageModule']);



app.directive('wpSearch', function($http, $rootScope, $q, localStorageService){
    return {
        restrict:'A',
        controller:function($scope){


            if(!localStorageService.get('myPlugins')) {
                var plugins = [{
                    author: '<a href="http://jetpack.me">Automattic</a>',
                    author_profile: "http://profiles.wordpress.org/tmoorewp",
                    homepage: 'http://wordpress.org/extend/plugins/jetpack/',
                    name: "Jetpack by WordPress.com",
                    num_ratings: 1196,
                    rating: 76.8,
                    requires: "3.5",
                    short_description: "Supercharge your WordPress site with powerful features previously only available to WordPress.com users.",
                    slug: "jetpack",
                    tested: "3.6.1",
                    version: "2.5",
                }];                
                localStorageService.add('myPlugins', angular.toJson(plugins));
            }

            $scope.what = "what!";


        },
        link:function(scope, element, attrs) {
            scope.myPlugins = angular.fromJson(localStorageService.get('myPlugins'));
            scope.test=[
                {
                    name:'test1'
                },
                {
                    name:'test2'
                },
                {
                    name:'test3'
                }
            ]
            console.log(scope.test)
            console.log(scope.myPlugins)

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


