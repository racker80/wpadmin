'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

  myApp.service('toggleStateService', function(){
  	this.state = [];

  	this.toggle = function(value) {
  		if(this[value]) {
  			delete this[value]
  		} else {
  			this[value] = 1;
  		}
  	}

  });

  myApp.service('formService', function(){
  	this.formService = {};
  });

  myApp.service('Data', function(){
  	
  	this.themes = [
  		{
  			name:'eCommerce',
  			image:'img/theme1.jpg'
  		},
  		{
  			name:'Blogger',
  			image:'img/theme2.png'
  		}
  	]

  	this.pages = ['Home', 'About', 'Contact'];

  	this.menus = [
  		{
  			name:'Menu',
  			items:[]
  		}
  	];
  });