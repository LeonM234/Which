(function() {
  "use strict";

    angular.module('whichApp')

      .controller('FeedController', function($rootScope, FIREBASE_URL){
        var ref = new Firebase(FIREBASE_URL);
        var vm = this;
        vm.user = $rootScope.user;
      })

}());
