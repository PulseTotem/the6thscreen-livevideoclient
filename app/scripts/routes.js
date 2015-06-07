'use strict';

/**
 * @ngdoc overview
 * @name T6SLiveVideoClientApp
 * @description
 * # T6SLiveVideoClientApp
 *
 * Routes module of the application.
 */
angular
    .module('T6SLiveVideoClientApp')
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
