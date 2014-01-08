angular.module( 'ngBoilerplate.api', [
  'ui.state',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'api', {
    url: '/api',
    views: {
      "main": {
        controller: 'ApiCtrl',
        templateUrl: 'api/api.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})
.factory('API', function($http, $q){
  var service = function(req) {
      var proxy ='http://localhost:4000/v0.9';

      var deffered = $q.defer();

      var options = {
        method: req.method, 
        url: proxy+req.url,
        data:req.data,
        headers:req.headers
      };

      console.log(options);

      $http(options)
      .success(function(data, status, headers, config) {
        console.log(status);
        console.log(data);
        deffered.resolve(data);
      })
      .error(function(data, status, headers, config) {
        console.log(status);
        console.log(data);
        deffered.resolve(data);
      });

      return deffered.promise;
  };

  return service;
})
.factory('USER', function($http, $q, API){
  var token = '';
  
  var service = {
    isToken:function(){
      return token;
    },
    getUsers: function(url){
      return API({
        url:'/users?size=100', 
        method:'GET'
      });
    },
    getUser: function(id) {
      return API({
        url:'/users/'+id, 
        method:'GET'
      });
    },
    getQuestions: function() {
      return API({
        url:'/questions', 
        method:'GET'
      });
    },    
    getToken: function(data) {
      console.log(data);
      var deferred = $q.defer();

      var getToken = API({
        url:'/tokens', 
        method:'POST', 
        data:data
      });
      
      getToken.then(function(response){
        token = response;
        deferred.resolve(response);
      });

      return deferred.promise;
    },
    createUser: function(data) {
      return API({
        url:'/users', 
        method:'POST', 
        data:data
      });
    },
    createSite: function(userId, tokenId, data) {
      return API({
        url:'/'+userId+'/sites',
        method:'POST',
        data:data,
        headers: {
          "X-Auth-Token":tokenId
        }
      });
    },
    getOwnedSites: function(userId, tokenId) {
      return API({
        url:'/'+userId+'/sites/owned',
        method:'GET',
        headers: {
          "X-Auth-Token":tokenId
        }
      });      
    }
  };

  return service;
})

.controller( 'ApiCtrl', function ApiCtrl( $scope, $http, $q, USER ) {
  $scope.login = {};
  $scope.newSite = {};

  $scope.token = USER.isToken();

  $scope.$watch(function(){
    return USER.isToken();
  }, function(result){
    $scope.token = result;
  });

  $scope.questions = USER.getQuestions();

  $scope.api = {
    getUsers: function() {
      USER.getUsers().then(function(results){
        $scope.users = results.users;
      });
    },
    getUser: function(id) {
      // var deferred = $q.defer();
      // USER.getUser(id).then(function(result){
      //   return deferred.resolve(result);
      // });
      return USER.getUser(id);
    },
    login:function() {
      var ths = this;

      USER.getToken($scope.login).then(function(result){
        $scope.loggedIn = {
          token:result
        };
        ths.getUser(result.userId).then(function(user){
          $scope.loggedIn.user = user;

          USER.getOwnedSites($scope.loggedIn.token.userId, $scope.loggedIn.token.id).then(function(results){
            $scope.mySites = results.sites;
          });
          console.log($scope.loggedIn);
        });
        
      });
    },
    signup:function() {
      USER.createUser($scope.login).then(function(result){
        console.log(result);
        // $scope.api.login();
      });
    },
    createSite:function() {
      console.log($scope.newSite);
      USER.createSite($scope.loggedIn.token.userId, $scope.loggedIn.token.id, $scope.newSite).then(function(result){
        USER.getOwnedSites($scope.loggedIn.token.userId, $scope.loggedIn.token.id).then(function(results){
            $scope.mySites = results.sites;
          });
        console.log(result);
      });
    }
  };
  



  console.log($scope.api.token);
  $scope.$watch('api.token', function(newValue){
    console.log(newValue);
  });

//   $scope.createUser = function(url){

//     // var newUser = $resource('localhost', {});
//     // console.log(newUser.get({

//     // }));
//     var postData = {
//       "password": "Changeme1",
//       "username": "emcgregor",
//       "email": "somewhere@email.com",
//       "firstname": "eric",
//       "lastname": "mcgregor",
//       "question": {
//        "id" : "6830",
//        "answer" : "an answer"
//      }
//     };
//     $http.post('http://localhost:3000/v0.9'+url, postData).
//     success(function(data, status, headers, config) {
//       // this callback will be called asynchronously
//       // when the response is available
//       console.log(data);
//       console.log(status);
//     }).
//     error(function(data, status, headers, config) {
//       // called asynchronously if an error occurs
//       // or server returns response with an error status.
//     });

//   };


//   $scope.getTokens = function(url) {
//     var postData = {
//       "username": "emcgregor",
//       "password":"Changeme1"
//      };
//     $http.post('http://localhost:3000/v0.9'+url, postData).
//       success(function(data, status, headers, config) {
//           // this callback will be called asynchronously
//           // when the response is available
//           token = data;
//           console.log(data);
//           console.log(status);
//           console.log(token);
//         }).
//       error(function(data, status, headers, config) {
//           // called asynchronously if an error occurs
//           // or server returns response with an error status.
//         });    
//   };

// $scope.updateUser = function(url) {
//   console.log('updating user');
//   console.log(token);
//   var postData = {
//     "username": "emcgregor",
//      "email": "somewhere@email.com",
//      "firstname": "eric",
//      "lastname": "test"
//   };
//       $http.put('http://localhost:3000/v0.9'+url, postData,{
//         headers: {
//           "X-Auth-Token":token.id
//         }
//       })
//       .success(function(data, status, headers, config) {
//           console.log(data);
//         }).
//       error(function(data, status, headers, config) {
//           // called asynchronously if an error occurs
//           // or server returns response with an error status.
//         });    
// };


//   $scope.getQuestions = function(url){

//     $http({
//       method: 'GET', 
//       // url: 'http://166.78.141.35:3000/v0.9'+url
//       url: 'http://localhost:3000/v0.9'+url
//     }).
//     success(function(data, status, headers, config) {

//       console.log(status);
//       console.log(data);
//     }).
//     error(function(data, status, headers, config) {

//     });

//     var question = $resource('http://166.78.141.35:3000/v0.9'+url);

//   };


//   $scope.getUser = function(url){

//     $http({
//       method: 'GET', 
//       // url: 'http://166.78.141.35:3000/v0.9'+url
//       url: 'http://localhost:3000/v0.9'+url
//     }).
//     success(function(data, status, headers, config) {

//       console.log(status);
//       console.log(data);
//     }).
//     error(function(data, status, headers, config) {

//     });

//   };


})

;
