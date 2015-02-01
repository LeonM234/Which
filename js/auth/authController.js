;(function(){
  'use strict';

  angular.module('whichApp')
   .controller('LoginController', function($scope, $location, authFactory){
      var vm = this;

      vm.ref = new Firebase(FIREBASE_URL);
      vm.ref.authWithOAuthPopup("facebook", function(error, authData) {
        if(error){
          console.log("login failed", error);
        } else {
          console.log("authenticated successfully with payload: ", authData);
        }
      }, {
        scope: 'email'
      });

    })
}());
