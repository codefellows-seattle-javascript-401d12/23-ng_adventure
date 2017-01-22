'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('playerService', ['$log', '$q', 'mapService', 'itemService', playerService]);

function playerService($log, $q, mapService, itemService) {
  $log.debug('playerService');

  let service = {};

  service.player = {
    name: 'Monkay',
    location: 'room1',
    hp: 1,
    mhp: 20,
    mp: 20,
    mmp: 20,
    mat: 8,
    feedback: 'Welcome to the game. Type HELP for a list of commands.',
    inventory: [],
    history: [],
    spells: {
      lightning: {
        castDescription: 'You send out a forking bolt of lightning!',
        inCombat: true,
        cost: 2,
        info: 'A damaging bolt of lightning.'
      },
      cure: {
        inCombat: false,
        cost: 3,
        castDescription: 'A warm, white glow washes over you.',
        info: 'A spell that restores some HP.'
      }
    }
  };

  service.drinkPotion = function(target) {
    let inventory = service.player.inventory;
    if (!target) return service.player.feedback = 'What do you want to drink?';
    let foundItem = inventory.filter(element => element.keywords.indexOf(target) !== -1)[0];
    if (!foundItem) return service.player.feedback = 'You don\'t seem to have any of those in your inventory.';

    service.player.inventory.splice(
      service.player.inventory.indexOf(
        service.player.inventory.find(element => element.shortDesc === foundItem.shortDesc)
      ), 1);

    if (foundItem.shortDesc === itemService.gameItems.healingPotion.shortDesc) {
      service.player.feedback = `You consume ${foundItem.shortDesc} and a warm, white glow briefly surrounds you. You restore ${foundItem.restoreValue} HP.`;
      service.player.hp += foundItem.restoreValue;
      if (service.player.hp > service.player.mhp) service.player.hp = service.player.mhp;
      return;
    }
    if (foundItem.shortDesc === itemService.gameItems.manaPotion.shortDesc) {
      service.player.feedback = `You consume ${foundItem.shortDesc} and feel a refreshing surge of energy for a moment. You restore ${foundItem.restoreValue} MP.`;
      service.player.mp += foundItem.restoreValue;
      if (service.player.mp > service.player.mmp) service.player.mp = service.player.mmp;
      return;
    }
  };

  service.listSpells = function() {
    service.player.feedback = 'You know the following spells:\n\n';
    Object.keys(service.player.spells).forEach(spell => {
      service.player.feedback +=
      `${spell[0].toUpperCase()}${spell.slice(1)}: ${service.player.spells[spell].info} Costs ${service.player.spells[spell].cost} MP.\n`;
    });
    return service.player.feedback;
  };

  service.movePlayer = function(direction) {
    if (direction === 'n') direction = 'north';
    if (direction === 'e') direction = 'east';
    if (direction === 'w') direction = 'west';
    if (direction === 's') direction = 'south';

    let newLocation = mapService.mapData[service.player.location].exits[direction];

    if (!newLocation) return service.player.feedback = `You can't go ${direction}.`;
    if (mapService.mapData[service.player.location].exits[direction].locked) return service.player.feedback = 'That door is locked.';

    service.player.history.push(service.player.location);
    service.player.location = newLocation.connection;
    service.player.feedback = `You move ${direction}.`;
  };

  service.addInventory = function(item) {
    if (!item) return service.player.feedback = 'What do you want to get?';
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
    if (!item) return service.player.feedback = 'What do you want to drop?';
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

    // Credit to user SheetJS on stackoverflow.com for this method of counting duplicate values in an array
    // http://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript/19395300
    let counts = {};
    tempInventory.forEach(element => counts[element] = (counts[element] || 0) + 1);

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
