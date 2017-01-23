'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    cabin: {
      desc: 'message from the cabin',
      south: 'trail'
    },
    trail: {
      desc: 'message from the trail',
      north: 'cabin',
      east: 'gate',
      south: 'pit'
    },
    pit: {
      desc: 'you have fallen into the pit and died',
      north: 'trail'
    },
    gate: {
      desc: 'message from the gate',
      west: 'trail',
      east: 'castle'
    },
    castle: {
      desc: 'sup from the castle',
      west: 'gate',
      south: 'corridor'
    },
    corridor: {
      desc: 'sup from the corridor',
      north: 'castle',
      east: 'snackroom'
    },
    snackroom: {
      desc: 'have a snack and relax',
      west: 'corridor'
    }
  };
  return service;
};
