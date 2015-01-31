;(function(){
  'use strict';

  angular.module('whichApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/login', {
      templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
        resolve: {
          data: function(authFactory){
            authFactory.disallowLogin();
          }
        }
      })
    })
    .run(function($rootScope, authFactory){
      $rootScope.$on('$routeChangeStart', function(event, nextRoute, priorRoute){
        if(nextRoute.$$route && nextRoute.$$route.private){
          authFactory.requireLogin();
        }
      })
    }}
}());
