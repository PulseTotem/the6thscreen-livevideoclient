'use strict';

/**
 * @ngdoc function
 * @name T6SLiveVideoClientApp.service:CONSTANTS
 * @description
 * # CONSTANTS
 * Service of the T6SLiveVideoClientApp
 */
angular.module('T6SLiveVideoClientApp')
  .constant('CONSTANTS', {
    backendUrl: 'http://localhost:4000/',
    //backendUrl: 'http://backend.herokuapp.com/',
    loginPath: 'users/login',
    loginFromTokenPath: 'users/loginFromToken'
  });
