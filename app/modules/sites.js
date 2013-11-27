angular.module('myApp.sites', [])
.factory('SiteList', function($q){
	var Site = Parse.Object.extend("Site");
	var query = new Parse.Query(Site);
	var defer = $q.defer();
	query.find({
		success: function(results) {
			defer.resolve(results);
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
	
	return {
		list: function(){
			return defer.promise;
		}
	}
})
.directive('mySites', function($route){
	return {
		restrict:"A",
		scope:{},
		controller:function($scope){
			
			console.log('my sites controller')

			var sites = function(){
				return $route.current.locals.sites;
			}
			$scope.sites = new sites();
		},
		link:function(scope, element, attrs){

		}
	}
});