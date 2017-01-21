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
    mapService.mapData[service.player.location].items.splice(
      mapService.mapData[service.player.location].items.indexOf(
        mapService.mapData[service.player.location].items.find(element => element.shortDesc === foundItem.shortDesc)
      ), 1);
    service.player.feedback = `You pick up ${foundItem.shortDesc}.`;
  };

  service.removeInventory = function(item) {
    let arrayOfItems = service.player.inventory;
    let foundItem = arrayOfItems.filter(element => element.keywords.indexOf(item) !== -1)[0];
    if (!foundItem) return service.player.feedback = 'You don\'t seem to be carrying that.';

    mapService.mapData[service.player.location].items.push(foundItem);
    service.player.inventory.splice(
      service.player.inventory.indexOf(
        service.player.inventory.find(element => element.shortDesc === foundItem.shortDesc)
      ), 1);
    service.player.feedback = `You drop ${foundItem.shortDesc}.`;
  };

  service.listInventory = function() {
    let inventory = 'You are currently carrying:\n';
    if (service.player.inventory.length === 0) return service.player.feedback = 'You aren\'t carrying anything.';
    let tempInventory = service.player.inventory.map(element => element.shortDesc);
    let counts = {};
    tempInventory.forEach(element => {
      counts[element] = (counts[element] || 0) + 1;
    });
    tempInventory.reduce((acc, curr) => {
      if (acc.indexOf(curr) === -1) acc.push(curr);
      return acc;
    }, []).forEach(element => {
      if (counts[element] === 1) return inventory += `${element}\n`;
      inventory += `${element} x ${counts[element]}\n`;
    });
    service.player.feedback = inventory;
  };

  return service;
}
