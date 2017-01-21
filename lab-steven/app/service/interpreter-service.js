'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('interpreterService', ['$log', interpreterService]);

function interpreterService($log) {
  $log.debug('Interpret service');

  let service = {};

  service.acceptableCommands = {
    north: 'direction',
    n: 'direction',
    east: 'direction',
    e: 'direction',
    west: 'direction',
    w: 'direction',
    south: 'direction',
    s: 'direction',
    get: 'add inventory',
    drop: 'remove inventory',
    inv: 'check inventory',
    inventory: 'check inventory',
    help: 'help',
    unlock: 'unlock'
  };

  service.help = function() {
    return ':::: LIST OF COMMANDS ::::\n\n' +
    'help: Shows this menu\n\n' +
    'north, south, east, west: Moves you in that direction\n\n' +
    'n, s, e, w: Shortcuts for the above\n\n' +
    'get <item keyword> (ex: "get key" or "get blue key"): Picks an item up in your current room\n\n' +
    'drop <item keyword> (ex: "drop key" or "drop blue key"): Drops an item from your inventory into the current room\n\n' +
    'inv, inventory: Displays your current inventory\n\n' +
    'unlock <direction>: Unlocks a locked door in the stated direction if you have the correct key. Must fully type the direction\n\n';
  };

  return service;
}
