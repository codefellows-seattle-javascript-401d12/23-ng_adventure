'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('mapService', ['$log', 'itemService', 'mobService', mapService]);

function mapService($log, itemService, mobService) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    intro: {
      title: 'Intro',
      desc: 'Enter your name. You won\'t be able to leave until you select a name.',
      exits: {},
      items: [],
      mobs: []
    },
    room1: {
      title: 'Room 1',
      desc: 'This is the description for room 1. It\'s just placeholder text and will thus be gone in the near future.',
      exits: {
        east: {
          connection: 'room2',
          locked: true,
          unlockKey: itemService.gameItems.key
        }
      },
      items: [itemService.gameItems.key, itemService.gameItems.key, itemService.gameItems.blueKey, itemService.gameItems.healingPotion, itemService.gameItems.healingPotion, itemService.gameItems.manaPotion],
      mobs: [mobService.rat, mobService.turtle]
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

  service.unlockDoor = function(direction, currentRoom, playerInventory) {
    if (direction === 'n') direction = 'north';
    if (direction === 'e') direction = 'east';
    if (direction === 'w') direction = 'west';
    if (direction === 's') direction = 'south';

    if (service.mapData[currentRoom].exits[direction]) {
      if (service.mapData[currentRoom].exits[direction].locked) {
        if (playerInventory.find((invItem => service.mapData[currentRoom].exits[direction].unlockKey === invItem))) {
          service.mapData[currentRoom].exits[direction].locked = false;
          let connectedRoom = service.mapData[currentRoom].exits[direction].connection;
          Object.keys(service.mapData[connectedRoom].exits).forEach(eleDirection => {
            if (service.mapData[connectedRoom].exits[eleDirection].connection === currentRoom) {
              service.mapData[connectedRoom].exits[eleDirection].locked = false;
            }
          });
          return `You use ${service.mapData[currentRoom].exits[direction].unlockKey.shortDesc} to unlock the door to the ${direction}.`;
        }
        return 'You don\'t have the correct key to unlock that door.';
      }
      return 'That exit isn\'t locked.';
    }
    return `There doesn\'t appear to be an exit to the ${direction}.`;
  };

  return service;
}
