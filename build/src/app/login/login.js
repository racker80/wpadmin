/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.login', [
  'ui.state'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "login": {
        controller: 'loginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'loginCtrl', function LoginController( $scope, $state, $location, $http, $resource, User ) {
  console.log('loginCtrl');
  User.reset();

  var token = {};


  $scope.login = function(){

    Parse.User.logIn($scope.login.email, $scope.login.password, {
      success: function(user) {
        console.log(user);
        $state.transitionTo('sites.mine');
      },
      error: function(user, error) {
        alert('You must use a real email address and password');
      }
    });
  };

  $scope.createUser = function(url){

    // var newUser = $resource('localhost', {});
    // console.log(newUser.get({

    // }));
    var postData = {
      "password": "Changeme1",
      "username": "emcgregor",
      "email": "somewhere@email.com",
      "firstname": "eric",
      "lastname": "mcgregor",
      "question": {
       "id" : "6830",
       "answer" : "an answer"
     }
    };
    $http.post('http://localhost:3000/v0.9'+url, postData).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(data);
      console.log(status);
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

  };


  $scope.getTokens = function(url) {
    var postData = {
      "username": "emcgregor",
      "password":"Changeme1"
     };
    $http.post('http://localhost:3000/v0.9'+url, postData).
      success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          token = data;
          console.log(data);
          console.log(status);
          console.log(token);
        }).
      error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });    
  };

$scope.updateUser = function(url) {
  console.log('updating user');
  console.log(token);
  var postData = {
    "username": "emcgregor",
     "email": "somewhere@email.com",
     "firstname": "eric",
     "lastname": "test"
  };
      $http.put('http://localhost:3000/v0.9'+url, postData,{
        headers: {
          "X-Auth-Token":token.id
        }
      })
      .success(function(data, status, headers, config) {
          console.log(data);
        }).
      error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });    
};


  $scope.getQuestions = function(url){

    $http({
      method: 'GET', 
      // url: 'http://166.78.141.35:3000/v0.9'+url
      url: 'http://localhost:3000/v0.9'+url
    }).
    success(function(data, status, headers, config) {

      console.log(status);
      console.log(data);
    }).
    error(function(data, status, headers, config) {

    });

    var question = $resource('http://166.78.141.35:3000/v0.9'+url);

  };


  $scope.getUser = function(url){

    $http({
      method: 'GET', 
      // url: 'http://166.78.141.35:3000/v0.9'+url
      url: 'http://localhost:3000/v0.9'+url
    }).
    success(function(data, status, headers, config) {

      console.log(status);
      console.log(data);
    }).
    error(function(data, status, headers, config) {

    });

  };
})
;

























    // console.log(user.get());
    // console.log('testa');
//     postData = { 
//   "id": 42, 
//   "title": "The Hitchhiker's Guide to the Galaxy", 
//   "authors": ["Douglas Adams"] 
// };
//     var test = $resource('http://localhost:9000/api/guides/slug/wordpress/markdown', {}, {});

//     test.get({}, function(data){
//       console.log(data);
//     });

    // var t = $http.get('http://166.78.141.35');
  //   jQuery.ajax({
  //     url:'https://166.78.141.35'
  //   }).done(function( data ) {
  //   if ( console && console.log ) {
  //     console.log( "Sample of data:", data.slice( 0, 100 ) );
  //   }
  // });

