'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('appCtrl', function($scope, $rootScope, $location, toggleStateService, Data, offCanvasService) {
  	$rootScope.toggleState = toggleStateService;
  	$rootScope.Data = Data;

    $rootScope.go = function ( path ) {
      $location.path( path );
    };




    $rootScope.contentClass = function(){
      return {
        // showOffCanvas: $scope.showOffCanvas
      }
    }

    $rootScope.viewNewSite = function(){

          offCanvasService.showDetail = !offCanvasService.showDetail;
          offCanvasService.showOffCanvas = true;

          offCanvasService.detail.template = 'app/templates/modals/site.detail.html';
          offCanvasService.detail.input = angular.copy(Data.sites.mySites[Data.sites.mySites.length-1]);
          offCanvasService.detail.output = [];
          scope.$apply();
    }


  });


