'use strict';

const angular = require('angular');
const angularAdventure = angular.module('angularAdventure');

angularAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('adventure map service');

  let service = {};

  // TODO: BUILD OUT MAP LOCATIONS

  return service;
};
