'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('playerService', ['$log', '$q', 'mapService', playerService]);

function playerService($log, $q, mapService) {
  $log.debug('playerService');

  let service = {};

  service.player = {
    name: 'Monkay',
    location: 'room1',
    hp: 20,
    maxHP: 20,
    mp: 20,
    maxMP: 20,
    feedback: 'Welcome to the game.',
    inventory: []
  };

  service.player.history = [];

  service.movePlayer = function(direction) {
    if (direction === 'n') direction = 'north';
    if (direction === 'e') direction = 'east';
    if (direction === 'w') direction = 'west';
    if (direction === 's') direction = 'south';

    return new $q((resolve, reject) => {
      let newLocation = mapService.mapData[service.player.location].exits[direction];

      if (!newLocation) {
        service.player.feedback = `You can't go ${direction}.`;
        return reject(`Player can't go ${direction}.`);
      }

      service.player.history.push(service.player.location);

      service.player.location = newLocation;
      service.player.feedback = `You move ${direction}.`;
      return resolve(service.player.location);
    });
  };

  service.addInventory = function(item) {
    return new $q((resolve, reject) => {
      let roomItemIndex = mapService.mapData[service.player.location].items.indexOf(item.toLowerCase());

      if (roomItemIndex === -1) {
        service.player.feedback = 'I don\'t see that here.';
        return reject('Item not found.');
      }
      let foundItem = mapService.mapData[service.player.location].items[roomItemIndex];
      service.player.inventory.push(foundItem);
      mapService.mapData[service.player.location].items.splice(roomItemIndex, 1);
      service.player.feedback = `You pick up ${foundItem}.`;
      return resolve(`Picked up ${foundItem}.`);
    });
  };

  return service;
}
