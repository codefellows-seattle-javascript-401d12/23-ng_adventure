'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure'); //with one argument, module() returns a module to be added onto

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    entry: {
      desc: 'You are in the entry way. Want some free stickers?',
      south: 'hallway',
      north: 'eventSpace',
      west: 'watercooler'
    },
    hallway: {
      desc: 'You are in the hallway with terrible green carpeting. Corporate drones sneer at CF students as they walk by.',
      north: 'entry'
    },
    eventSpace: {
      desc: 'You are in the event space, listening to a presentation',
      east: 'kitchen',
      south: 'entry',
      west: 'lounge'
    },
    lounge: {
      desc: 'You are in the land of couches and weird rugs. A dangling power outlet hits you in the face.',
      east: 'eventSpace',
      west: 'lovelace',
      south: 'watercooler'
    },
    watercooler: {
      desc: 'You are at the water cooler. Thirsty?',
      west: 'coworking',
      east: 'entry'
    },
    lovelace: {
      desc: 'You interrupted a python class. They are performing some kind of sacred indentation ceremony.',
      east: 'lounge',
    },
    coworking: {
      desc: 'You are sat at a crappy metal desk with your macbook, same as 50 other people.',
      east: 'watercooler',
      west: 'staff'
    },
    kitchen: {
      desc: 'You are in the kitchen. They have coffee for before lecture, and beer for after.',
      west: 'eventSpace'
    },
    staff: {
      desc: 'You are amongst Code Fellows staff. They are all trying to skateboard and work at the same time.',
      east: 'coworking'
    }
  };

  return service;
}
