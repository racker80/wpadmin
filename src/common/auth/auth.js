// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
angular.module('auth', [])

.factory('Auth', ['$http', '$q', '$state', function($http, $q, $state){
// Redirect to the given url (defaults to '/')
function redirect(url) {
url = url || '/';
$location.path(url);
}

	var service = {
		// Ask the backend to see if a user is already authenticated - this may be from a previous session.
		requestCurrentUser: function() {
			if ( service.isAuthenticated() ) {
				return $q.when(service.currentUser);
			} else {
				return $http.get('/current-user').then(function(response) {
					service.currentUser = response.data.user;
					return service.currentUser;
				});
			}
		},
		// Information about the current user
		currentUser: function(){
			return Parse.User.current();
		},

		// Is the current user authenticated?
		isAuthenticated: function(){
			if(!Parse.User.current()) {
				$state.transitionTo('login');
			} else {
				return true;
			}

		},

		// Is the current user an adminstrator?
		isAdmin: function() {
			return !!(service.currentUser && service.currentUser.admin);
		}
	};
return service;
}]);