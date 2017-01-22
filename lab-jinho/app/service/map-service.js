'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    seatA1: {
      desc: 'message from seatA1',
      east: 'seatA2',
      south: 'seatB1'
    },
    seatA2: {
      desc: 'message from seatA2',
      east: 'seatA3',
      west: 'seatA1',
      south: 'seatB2'
    },
    seatA3: {
      desc: 'message from seatA3',
      west: 'seatA2',
      south: 'seatB3'
    },
    seatB1: {
      desc: 'message from seatB1',
      north: 'seatA1',
      east: 'seatB2',
      south: 'seatC3'
    },
    seatB2: {
      desc: 'message from seatB2',
      north: 'seatA2',
      east: 'seatB3',
      south: 'seatC2',
      west: 'seatB1'
    },
    seatB3: {
      desc: 'message from seatB3',
      north: 'seatA3',
      south: 'seatC3',
      west: 'seatB2'
    },
    seatC1: {
      desc: 'message from seatC1',
      north: 'seatB1',
      east: 'seatC2'
    },
    seatC2: {
      desc: 'message from seatC2',
      north: 'seatB2',
      east: 'seatC3',
      west: 'seatC1'
    },
    seatC3: {
      desc: 'message from seatC3',
      north: 'seatB3',
      west: 'seatC2'
    }
  };

  return service;
}
