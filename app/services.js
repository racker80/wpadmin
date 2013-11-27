'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
  .service('Auth', function($rootScope, $location){

      var currentUser = Parse.User.current();
      if (currentUser) {
        console.log(currentUser)
        $rootScope.currentUser = currentUser;
      } else {
       $location.path('/');
     }


  })
  .service('toggleStateService', function(){
  	this.state = [];
  	this.toggle = function(value) {
  		if(this[value]) {
  			delete this[value]
  		} else {
  			this[value] = 1;
  		}
  	}

  });