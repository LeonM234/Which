;(function(){
  'use strict';

  angular.module('whichApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/login', {
      templateUrl: 'views/_login.html',
        controller: 'LoginController',
        controllerAs: 'login',
        resolve: {
          data: function(authFactory){
            authFactory.disallowLogin();
          }
        }
      })
      .when('/logout', {
        template: '',
        controller: 'logoutController'
      })
    })
    .run(function($rootScope, authFactory){
      $rootScope.$on('$routeChangeStart', function(event, nextRoute, priorRoute){
        if(nextRoute.$$route && nextRoute.$$route.private){
          authFactory.requireLogin();
        }
      })
    });

})();
