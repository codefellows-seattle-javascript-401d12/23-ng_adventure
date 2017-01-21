'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('mapService', ['$log', 'itemService', mapService]);

function mapService($log, itemService) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    room1: {
      title: 'Room 1',
      desc: 'This is the description for room 1. It\'s just placeholder text and will thus be gone in the near future.',
      exits: {
        east: {
          connection: 'room2',
          locked: true
        }
      },
      items: [itemService.gameItems.key, itemService.gameItems.key, itemService.gameItems.blueKey]
    },
    room2: {
      title: 'Room 2',
      desc: 'This will also be replaced at some point soon. Probably by something significantly more fascinating.',
      exits: {
        west: {
          connection: 'room1',
          locked: true
        },
        east: {
          connection: 'room3',
          locked: false
        }
      },
      items: []
    },
    room3: {
      title: 'Room 3',
      desc: 'This may come as a shock to you, but this is also just some placeholder text. Nothing to see here, folks. Move along.',
      exits: {
        west: {
          connection: 'room2',
          locked: false
        }
      },
      items: []
    }
  };

  return service;
}
