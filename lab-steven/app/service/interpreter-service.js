'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('interpreterService', ['$log', interpreterService]);

function interpreterService($log) {
  $log.debug('Interpret service');

  let service = {};

  service.acceptableCommands = {
    north: 'direction',
    n: 'direction',
    east: 'direction',
    e: 'direction',
    west: 'direction',
    w: 'direction',
    south: 'direction',
    s: 'direction',
    get: 'add inventory'
  };

  return service;
}
