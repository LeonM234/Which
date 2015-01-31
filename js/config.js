;(function() {
  'use strict';

  angular.module('whichApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: '../views/_which_feed.html',
        controller: 'feedController',
        controllerAs: 'myFeed'
      })
      .when('/login', {
        templateUrl: '../views/_login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .when('/dashboard', {
        templateUrl: '../views/_dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dashboard'
      })
      .when('/about', {
        templateUrl: '../views/_about.html',
        controller: 'aboutController',
        controllerAs: 'about'
      })
      .when('/newwhich', {
        templateUrl: '../views/_new_which.html',
        controller: 'newWhichController',
        controllerAs: 'newWhich'
      })
      .otherwise({redirectTo: '/'});
    })

}());
