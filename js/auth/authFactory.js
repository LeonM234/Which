;(function(){
  'use strict';

  angular.module('whichApp')
    .factory('authFactory', function($rootScope, $location, FIREBASE_URL){
      var factory = {};
      var ref = new Firebase(FIREBASE_URL);
      $rootScope.user = ref.getAuth();

      factory.requireLogin = function(){
        if (!_isLoggedIn()){
          $location.path('/login');
        }
      };

      factory.disallowLogin = function(){
        if(_isLoggedIn()){
          $location.path('/');
        }
      };
      
      function _isLoggedIn(){
        return Boolean(ref.getAuth());
      }

      return factory;
    })
}());
