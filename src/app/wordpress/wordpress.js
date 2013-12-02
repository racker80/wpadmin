/**

 */
angular.module( 'ngBoilerplate.wp', [
  'ui.state'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'wp', {
    url: '/wordpress',
    views: {
      "main": {
        controller: 'wpCtrl',
        templateUrl: 'wordpress/wordpress.tpl.html'
      }
    },
    resolve: {
      auth: function(Auth) {
        Auth.isAuthenticated();
      }
    },    
    data:{ pageTitle: 'Home' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'wpCtrl', function WpController( $scope, $rootScope, Auth ) {
  console.log('wpCtrl');
  Auth.isAuthenticated();
})
.factory('wpData', function(){
  var service = {};
  
  service.themes = [
  {
    name:'Product',
    image:'assets/theme1.jpg',
    author:'ThemeAuthor',
    description:'product® responsive wordpress theme is best way to present your product. period. Theme is modern, clean, fully responsive with a lot of features …'
  },
  {
    name:'Blogger',
    image:'assets/theme2.png',
    author:'ThemeAuthor',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, pariatur, inventore, ut nobis animi voluptatum modi assumenda repellendus facere voluptate atque illo!'
  },
  {
    name:'PoliticalPress',
    image:'assets/theme3.jpg',
    author:'ThemeAuthor',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, dicta maxime voluptatibus optio id neque expedita ipsa fugit.'
  },
  {
    name:'Sales Theme',
    image:'assets/theme4.jpg',
    author:'ThemeAuthor',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, maiores soluta amet impedit dolorem. Ullam.'
  },
  {
    name:'Hitched',
    image:'assets/screenshot1.png',
    author:'ThemeAuthor',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim officiis nulla quae expedita dolore eveniet vero.'
  }  
  ];


  return service;

})

;