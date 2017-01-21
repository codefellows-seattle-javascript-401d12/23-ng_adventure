'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
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
      west: 'sittingroom'
    },
    sittingroom: {
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
      east: 'diningroom',
      south: 'entryway',
      west: 'den'
    },
    den: {
      description: 'messageHere',
      east: 'corridor'
    },
    diningroom: {
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
  };
}
