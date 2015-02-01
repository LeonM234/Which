;(function() {
  'use strict';

  angular.module('whichApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: '../views/_which_feed.html',
        controller: 'FeedController',
        controllerAs: 'myFeed'
      })
      .when('/login', {
        templateUrl: '../views/_login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/dashboard', {
        templateUrl: '../views/_dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .when('/about', {
        templateUrl: '../views/_about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/newwhich', {
        templateUrl: '../views/_new_which.html',
        controller: 'NewWhichController',
        controllerAs: 'newWhich'
      })
      .otherwise({redirectTo: '/'});
    })

}());
