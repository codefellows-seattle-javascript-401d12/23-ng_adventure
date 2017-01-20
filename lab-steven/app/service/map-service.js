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
      desc: 'Room 1 desc.',
      east: 'room2',
      exits: 'east'
    },
    room2: {
      title: 'Room 2',
      desc: 'Room 2 desc.',
      west: 'room1',
      east: 'room3',
      exits: 'east west'
    },
    room3: {
      title: 'Room 3',
      desc: 'Room 3 desc.',
      west: 'room2',
      exits: 'west'
    }
  };

  return service;
}
