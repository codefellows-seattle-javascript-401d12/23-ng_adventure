'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

funciton mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    porch: {
      description: 'message from porch',
      north: 'entryway'
    },
    entryway: {
      description: 'messageHere',
      north: 'corridor',
      east: 'ballroom',
      south: 'porch',
      west: 'sitting-room'
    },
    sitting-room: {
      description: 'messageHere',
      east: 'entryway'
    },
    ballroom: {
      description: 'messageHere',
      west: 'entryway'
    },
    corridor: {
      description: 'messageHere',
      north: 'kitchen',
      east: 'dining-room',
      south: 'entryway',
      west: 'den'
    },
    den: {
      description: 'messageHere',
      east: 'corridor'
    },
    dining-room: {
      description: 'messageHere',
      west: 'corridor'
    },
    kitchen: {
      description: 'messageHere',
      east: 'pantry',
      south: 'corridor',
      west: 'cellar'
    },
    cellar: {
      description: 'messageHere',
      east: 'kitchen'
    },
    pantry: {
      description: 'messageHere',
      west: 'kitchen'
    }
  }
}
