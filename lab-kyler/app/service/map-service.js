'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure'); //with one argument, module() returns a module to be added onto

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    entry: {
      desc: 'youre in the entry way. Want some free stickers?',
      south: 'hallway',
      north: 'eventSpace'
    },
    hallway: {
      desc: 'youre in the hallway with terrible green carpeting. Corporate drones sneer at CF students as they walk to and from offices unknown.',
      north: 'entry'
    },
    eventSpace: {
      desc: 'You are in the event space, listening to a presentation',
      east: 'kitchen',
      south: 'entry',
      west: 'lounge'
    },
    lounge: {
      desc: 'you are in the land of couches and weird rugs. A dangling power outlet hits you in the face.',
      east: 'eventSpace',
      west: 'lovelace',
      south: 'watercooler'
    },
    watercooler: {
      desc: 'water',
      west: 'coworking'
    },
    lovelace: {
      desc: 'You interrupted a python class. Theyre performing some kind of sacred indentation ceremony.',
      east: 'lounge',
    },
    coworking: {
      desc: 'You are sat at a shitty metal desk with your macbook. So are 50 other people.',
      east: 'watercooler',
      west: 'lovelace',
      south: 'watercooler'
    }
  };

  return service;
}
