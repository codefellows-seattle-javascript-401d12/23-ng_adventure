'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    room1: {
      title: 'Room 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      east: 'room2',
      exits: '[east]'
    },
    room2: {
      title: 'Room 2',
      desc: 'Room 2 desc.',
      west: 'room1',
      east: 'room3',
      exits: '[east  west]'
    },
    room3: {
      title: 'Room 3',
      desc: 'Room 3 desc.',
      west: 'room2',
      exits: '[west]'
    }
  };

  return service;
}
