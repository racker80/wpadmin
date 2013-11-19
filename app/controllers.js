'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('appCtrl', function($scope, $rootScope, $location, toggleStateService, Data, offCanvasService) {
  	$rootScope.toggleState = toggleStateService;
  	$rootScope.Data = Data;
    $rootScope.go = function ( path ) {
      $location.path( path );
    };

    console.log('appctrl')
    $rootScope.viewNewSite = function(){

          offCanvasService.showDetail = true;
          offCanvasService.showOffCanvas = true;
          offCanvasService.detail = {}
          offCanvasService.detail.template = 'app/templates/modals/site.detail.html';
          offCanvasService.detail.input = angular.copy(Data.sites.mySites[Data.sites.mySites.length-1]);
          offCanvasService.detail.output = [];
          $rootScope.$apply();
    }


  })
.controller('sitesCtrl', function($scope){
  
})
.controller('wpCtrl', function($scope){

});


