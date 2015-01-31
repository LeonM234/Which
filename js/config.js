;(function() {
  'use strict';

  angular.module('whichApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/_which_feed',
        controller: 'feedController',
        controllerAs: 'myFeed'
      })
      .when('/login', {
        templateUrl: 'views/_login',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .when('/profile', {
        templateUrl: 'views/_my_whiches',
        controller: 'profileController',
        controllerAs: 'profile'
      })
      .when('/about', {
        templateUrl: 'views/_about',
        controller: 'aboutController'.
        controllerAs: 'about'
      })
      .when('/newwhich', {
        templateUrl: 'views/_new_which',
        controller: 'newWhichController',
        controllerAs: 'newWhich'
      })
      .otherwise({redirectTo: '/'});
    })

}());
