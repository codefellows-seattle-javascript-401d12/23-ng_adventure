'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.component('playerInput', {
  template: require('./player-input.html'),
  controller: 'PlayerInputController',
  controllerAs: 'playerInputCtrl'
});

adventureGame.controller('PlayerInputController', ['$log', 'mapService', 'playerService', 'interpreterService', 'mobService', 'combatService','$location', '$anchorScroll', PlayerInputController]);

function PlayerInputController($log, mapService, playerService, interpreterService, mobService, combatService, $location, $anchorScroll) {
  $log.debug('PlayerInputController');

  this.interpretCommand = function(command) {
    this.command = '';
    if (playerService.player.location === 'intro') return playerService.setName(command);
    if (playerService.player.location === 'tower') return;
    if (playerService.player.hp <= 0) return playerService.player.feedback = 'Dead people can\'t do that. You\'ll have to start over.';
    let baseCommand = command.toLowerCase().split(' ')[0];
    if (baseCommand === '') return;
    let commandArgs = command.toLowerCase().split(' ').splice(1).join(' ').trim();
    if (!combatService.inCombat) combatService.combatLog = [];

    if (!interpreterService.acceptableCommands[baseCommand]) return playerService.player.feedback = 'I\'m not sure what you\'re trying to do.';

    if (interpreterService.acceptableCommands[baseCommand] === 'states') {
      playerService.listStates();
      return scrollToBottom();
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'alias') {
      playerService.player.feedback = interpreterService.alias(commandArgs);
      return scrollToBottom();
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'cast') {
      combatService.castSpell(commandArgs);
      if (playerService.player.feedback === 'You don\'t have enough MP.' || playerService.player.feedback === 'You don\'t know that spell.') {
        return scrollToBottom();
      }
      combatService.enemyAttack();
      return scrollToBottom();
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'attack') {
      combatService.attack();
      combatService.enemyAttack();
      return scrollToBottom();
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'drink') {
      playerService.drinkPotion(commandArgs);
      if (combatService.inCombat) {
        if (playerService.player.feedback === 'What do you want to drink?' ||
        playerService.player.feedback === 'You don\'t seem to have any of those in your inventory.' ||
        playerService.player.feedback === 'You can\'t drink that.') {
          return scrollToBottom();
        }
        combatService.enemyAttack();
      }
      return scrollToBottom();
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'help') {
      playerService.player.feedback = interpreterService.help();
      return scrollToBottom();
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'spells') {
      playerService.player.feedback = playerService.listSpells();
      return scrollToBottom();
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'check inventory') {
      playerService.listInventory();
      return scrollToBottom();
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'look') {
      if (!commandArgs) {
        playerService.player.feedback = 'Look at what?';
        return scrollToBottom();
      }
      
      let examArray = mapService.mapData[playerService.player.location].mobs;
      let foundMob = examArray.filter(mob => mob.keywords.indexOf(commandArgs) !== -1)[0];
      if (!foundMob) {
        examArray = playerService.player.inventory;
        let foundItem = examArray.filter(element => element.keywords.indexOf(commandArgs) !== -1)[0];
        if (!foundItem) {
          playerService.player.feedback = 'I don\'t see that figure here or that item in your inventory.';
          return scrollToBottom();
        }
        playerService.player.feedback = foundItem.description;
        return scrollToBottom();
      }
      playerService.player.feedback = foundMob.description;
      return scrollToBottom();
    }

    if (combatService.inCombat) {
      playerService.player.feedback = 'You can\'t do that while you\'re in the middle of combat!';
      return scrollToBottom();
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'fight') combatService.startCombat(commandArgs);

    if (interpreterService.acceptableCommands[baseCommand] === 'direction') playerService.movePlayer(baseCommand);

    if (interpreterService.acceptableCommands[baseCommand] === 'add inventory') playerService.addInventory(commandArgs);

    if (interpreterService.acceptableCommands[baseCommand] === 'remove inventory') playerService.removeInventory(commandArgs);

    if (interpreterService.acceptableCommands[baseCommand] === 'unlock') {
      playerService.player.feedback = mapService.unlockDoor(commandArgs, playerService.player.location, playerService.player.inventory);
    }

    function scrollToBottom() {
      setTimeout(function() {
        $location.hash('bottom');
        $anchorScroll();
      }, 0);
    }

    scrollToBottom();
  };
}
