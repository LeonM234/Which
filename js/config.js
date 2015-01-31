;(function() {
  'use strict';

  angular.module('whichApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/_which_feed',
        controller: 'feedController',
        controllerAs: 'myFeed',
        private: true
      })
      .when('/login', {
        templateUrl: 'views/_login',
        controller: 'loginController',
        controllerAs: 'login',
        private: true
      })
      .when('/profile', {
        templateUrl: 'views/_my_whiches',
        controller: 'profileController',
        controllerAs: 'profile',
        private: true
      })
      .when('/about', {
        templateUrl: 'views/_about',
        controller: 'aboutController',
        controllerAs: 'about',
        private: true
      })
      .when('/newwhich', {
        templateUrl: 'views/_new_which',
        controller: 'newWhichController',
        controllerAs: 'newWhich',
        private: true
      })
      .otherwise({redirectTo: '/'});
    })

}());
