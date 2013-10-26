'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')

  .service('toggleStateService', function(){
  	this.state = [];

  	this.toggle = function(value) {
  		if(this[value]) {
  			delete this[value]
  		} else {
  			this[value] = 1;
  		}
  	}

  })
  .service('formService', function(){
  	this.formService = {};
  });