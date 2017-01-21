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
    let arrayOfItems = mapService.mapData[service.player.location].items;
    let foundItem = arrayOfItems.filter(element => element.keywords.indexOf(item) !== -1)[0];
    if (!foundItem) return service.player.feedback = 'I don\'t see that here.';

    service.player.inventory.push(foundItem);
    mapService.mapData[service.player.location].items.pop(mapService.mapData[service.player.location].items.find(element => {
      return element.shortDesc === foundItem.shortDesc;
    }));
    service.player.feedback = `You pick up ${foundItem.shortDesc}.`;
  };

  service.removeInventory = function(item) {
    let arrayOfItems = service.player.inventory;
    let foundItem = arrayOfItems.filter(element => element.keywords.indexOf(item) !== -1)[0];
    if (!foundItem) return service.player.feedback = 'You don\'t seem to be carrying that.';

    mapService.mapData[service.player.location].items.push(foundItem);
    service.player.inventory.pop(service.player.inventory.find(element => element.shortDesc === foundItem.shortDesc));
    service.player.feedback = `You drop ${foundItem.shortDesc}.`;
  };

  service.listInventory = function() {

    return;
  };

  return service;
}
