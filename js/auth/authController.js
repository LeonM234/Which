;(function(){
  'use strict';

  angular.module('whichApp')
   .controller('LoginController', function($scope, $location, authFactory, FIREBASE_URL, $rootScope){
      var vm = this;

      vm.ref = new Firebase(FIREBASE_URL);
      vm.ref.authWithOAuthPopup("facebook", function(error, authData) {
        if(error){
          console.log("login failed", error);
          //let's put some alerts here
        } else {
          console.log("authenticated successfully with payload: ", authData);
          $rootScope.user = authData.uid;
          $rootScope.userPhoto = authData.facebook.cachedUserProfile.picture.data.url;
          $location.path('/dashboard');
          $scope.$apply();
        }
      }, {
        scope: 'email'
      });

    })
}());
