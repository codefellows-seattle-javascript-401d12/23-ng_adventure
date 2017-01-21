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
    inventory: [],
    history: []
  };

  service.movePlayer = function(direction) {
    if (direction === 'n') direction = 'north';
    if (direction === 'e') direction = 'east';
    if (direction === 'w') direction = 'west';
    if (direction === 's') direction = 'south';

    let newLocation = mapService.mapData[service.player.location].exits[direction];

    if (!newLocation) return service.player.feedback = `You can't go ${direction}.`;

    service.player.history.push(service.player.location);
    service.player.location = newLocation;
    service.player.feedback = `You move ${direction}.`;
  };

  service.addInventory = function(item) {
    let roomItemIndex = mapService.mapData[service.player.location].items.indexOf(item.toLowerCase());
    if (roomItemIndex === -1) return service.player.feedback = 'I don\'t see that here.';

    let foundItem = mapService.mapData[service.player.location].items[roomItemIndex];
    service.player.inventory.push(foundItem);
    mapService.mapData[service.player.location].items.splice(roomItemIndex, 1);
    service.player.feedback = `You pick up ${foundItem}.`;
  };

  service.removeInventory = function(item) {
    let inventoryItemIndex = service.player.inventory.indexOf(item);
    if (inventoryItemIndex === -1) return service.player.feedback = 'You don\'t appear to be carrying that item.';

    let foundItem = service.player.inventory[inventoryItemIndex];
    mapService.mapData[service.player.location].items.push(foundItem);
    service.player.inventory.splice(inventoryItemIndex, 1);
    return service.player.feedback = `You drop ${foundItem}.`;
  };

  service.listInventory = function() {
    let inventory = '';
    service.player.inventory.forEach(invItem => inventory+= `${invItem}\n`);
    if (inventory === '') return service.player.feedback = 'You\'re not carrying anything.';
    service.player.feedback = `You are currently carrying:\n${inventory}`;
    return;
  };

  return service;
}
