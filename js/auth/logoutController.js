(function() {
  "use strict";

  angular.module('whichApp')

    .controller('logoutController', function($scope, $location, $rootScope, FIREBASE_URL){
      var ref = new Firebase(FIREBASE_URL);
      ref.unauth(function(){
        $location.path('/dashboard');
        $rootScope.user = null;
        $scope.$apply();
      })
    })

}());
