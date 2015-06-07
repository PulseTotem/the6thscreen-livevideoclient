'use strict';

/**
 * @ngdoc function
 * @name T6SLiveVideoClientApp.service:User
 * @description
 * # User
 * Service of the T6SLiveVideoClientApp
 */
angular.module('T6SLiveVideoClientApp')
  .factory('User', ["$resource", "CONSTANTS", function($resource, CONSTANTS) {
    return $resource(CONSTANTS.backendUrl + 'users/:id');
  }]);
