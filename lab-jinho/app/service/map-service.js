'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    seatA1: {
      desc: 'WHY IS IT SO HOT IN THIS PLANE!?',
      east: 'seatA2',
      south: 'seatB1'
    },
    seatA2: {
      desc: 'IS THIS FIRST CLASS!?',
      east: 'seatA3',
      west: 'seatA1',
      south: 'seatB2'
    },
    seatA3: {
      desc: 'ALLA-ALLA-ALLA HOLY WAR I HAVE A BOMB!!!',
      west: 'seatA2',
      south: 'seatB3'
    },
    seatB1: {
      desc: 'I WANT MY PEANUTS SERVED WARM!',
      north: 'seatA1',
      east: 'seatB2',
      south: 'seatC3'
    },
    seatB2: {
      desc: 'This is your seat.',
      north: 'seatA2',
      east: 'seatB3',
      south: 'seatC2',
      west: 'seatB1'
    },
    seatB3: {
      desc: 'I HAVE CHEST PAIN!',
      north: 'seatA3',
      south: 'seatC3',
      west: 'seatB2'
    },
    seatC1: {
      desc: 'THIS FLIGHT IS DELAYED!?',
      north: 'seatB1',
      east: 'seatC2'
    },
    seatC2: {
      desc: 'OH MY GOD MY WATER JUST BROKE!',
      north: 'seatB2',
      east: 'seatC3',
      west: 'seatC1'
    },
    seatC3: {
      desc: 'WHAT DO YOU MEAN THIS IS A NON-SMOKING FLIGHT!?',
      north: 'seatB3',
      west: 'seatC2'
    }
  };

  return service;
}
