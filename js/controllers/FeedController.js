(function() {
  "use strict";

    angular.module('whichApp')

      .controller('FeedController', function($rootScope){
        var vm = this;
        vm.user = $rootScope.user;

      })

}());
