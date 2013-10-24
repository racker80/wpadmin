'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function($scope, $modal, $rootScope, toggleStateService, Data, formService) {
  	$rootScope.toggleState = toggleStateService;
  	$rootScope.Data = Data;
  	$rootScope.formService = formService;


  	$scope.updateSelection = function(value){
  		if(!formService.themes) {
  			formService.themes = [];
  		}
  		formService.themes.push(value)
  	}

  	$scope.addMenu = function(value){
  		Data.menus.push({
  			name:Data.menuName
  		});
  	}

  	$scope.addToggle = function(value) {

  		toggleStateService[value] = 1;

  		console.log(toggleStateService)
  	}

  	$scope.addPageToMenu = function(value) {

  			Data.menus[0].items.push(value);

  	}

  })
  .controller('MyCtrl2', [function() {

  }]);


