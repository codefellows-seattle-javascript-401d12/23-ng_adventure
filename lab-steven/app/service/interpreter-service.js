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
    c: 'cast',
    fight: 'fight',
    spells: 'spells',
    spellbook: 'spells',
    magic: 'spells',
    drink: 'drink',
    quaff: 'drink',
    use: 'drink',
    states: 'states',
    st: 'states',
    buffs: 'states',
    attack: 'attack',
    at: 'attack',
    alias: 'alias'
  };

  service.help = function() {
    return ':::: LIST OF COMMANDS ::::\n\n' +
    'HELP: Shows this menu.\n\n' +
    'NORTH, SOUTH, EAST, WEST: Moves you in that direction.\n\n' +
    'N, S, E, W: Shortcuts for the above.\n\n' +
    'GET <item keyword> (ex: "get key" or "get blue key"): Picks an item up in your current room.\n\n' +
    'DROP <item keyword> (ex: "drop key" or "drop blue key"): Drops an item from your inventory into the current room.\n\n' +
    'INV, INVENTORY: Displays your current inventory.\n\n' +
    'UNLOCK <direction>: Unlocks a locked door in the stated direction if you have the correct key.\n\n' +
    'LOOK, L <item or mob>: Examine a mob or an item in your inventory more closely.\n\n' +
    'FIGHT <target>: Start combat with the targeted mob.\n\n' +
    'CAST, C <spell name>: Cast a spell. Spells will automatically target either yourself or your current enemy.\n\n' +
    'ATTACK, AT: Attack your current enemy with your fists. Deals less damage than spells, but doesn\'t cost MP.\n\n' +
    'SPELLS, SPELLBOOK, MAGIC: List the spells you know.\n\n' +
    'DRINK, QUAFF, USE <item>: Consumes a potion in your inventory.\n\n' +
    'STATES, ST, BUFFS: Shows states currently affecting you and their remaining duration.\n\n' +
    'ALIAS <command> <new command> (ex: "alias fight kill"): Creates a custom alias for any of the above commands.\n\n';
  };

  service.alias = function(commandArgs) {
    let originalCommand = commandArgs.split(' ')[0];
    let newCommand = commandArgs.split(' ').splice(1).join(' ').trim();

    if (!service.acceptableCommands[originalCommand]) return 'That isn\'t a known command.';
    if (originalCommand === 'alias') return 'You can\'t alias the alias command.';

    service.acceptableCommands[newCommand] = service.acceptableCommands[originalCommand];
    return `Alias ${newCommand} created for ${originalCommand}.`;
  };

  return service;
}
