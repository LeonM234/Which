;(function() {
  'use strict';

  angular.module('whichApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/which_feed',
        controller: 'feedController',
        controllerAs: 'myFeed'
      })
      .when('/login', {
        templateUrl: 'views/login',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .when('/profile', {
        templateUrl: 'views/my_whiches',
        controller: 'profileController',
        controllerAs: 'profile'
      })
      .when('/about', {
        templateUrl: 'views/about',
        controller: 'aboutController'.
        controllerAs: 'about'
      })
      .when('/newwhich', {
        templateUrl: 'views/new_which',
        controller: 'newWhichController',
        controllerAs: 'newWhich'
      })
    })

}());
