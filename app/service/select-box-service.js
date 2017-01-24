'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('selectBoxService', ['$log', selectBoxService]);

function selectBoxService($log) {
  $log.debug('selectBoxService');

  let service = {};

  service.directions = ['north', 'south', 'east', 'west'];
  service.moveDirection = service.directions[0];

  return service;
}
