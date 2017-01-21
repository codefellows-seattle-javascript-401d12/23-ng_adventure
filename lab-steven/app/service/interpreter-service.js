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
    unlock: 'unlock',
    look: 'look',
    l: 'look',
    cast: 'cast',
    c: 'cast'
  };

  service.help = function() {
    return ':::: LIST OF COMMANDS ::::\n\n' +
    'HELP: Shows this menu.\n\n' +
    'NORTH, SOUTH, EAST, WEST: Moves you in that direction.\n\n' +
    'N, S, E, W: Shortcuts for the above.\n\n' +
    'GET <item keyword> (ex: "get key" or "get blue key"): Picks an item up in your current room.\n\n' +
    'DROP <item keyword> (ex: "drop key" or "drop blue key"): Drops an item from your inventory into the current room.\n\n' +
    'INV, INVENTORY: Displays your current inventory.\n\n' +
    'UNLOCK <direction>: Unlocks a locked door in the stated direction if you have the correct key. Must fully type the direction.\n\n' +
    'LOOK, L <item or mob>: Examine a mob or an item in your inventory or mob more closely.\n\n';
  };

  return service;
}
