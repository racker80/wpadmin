'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('appCtrl', function($scope, $rootScope, $location, toggleStateService, Data, offCanvasService) {
  	$rootScope.toggleState = toggleStateService;
  	$rootScope.Data = Data;
    $rootScope.offCanvas = offCanvasService;

    $rootScope.go = function ( path ) {
      $location.path( path );
    };

    $rootScope.contentClass = function(){
      return {
        showOffCanvas: $scope.offCanvas.showOffCanvas
      }
    }


  });


