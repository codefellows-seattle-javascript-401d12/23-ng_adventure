'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.component('playerInput', {
  template: require('./player-input.html'),
  controller: 'PlayerInputController',
  controllerAs: 'playerInputCtrl'
});

adventureGame.controller('PlayerInputController', ['$log', 'playerService', 'interpreterService', '$location', '$anchorScroll', PlayerInputController]);

function PlayerInputController($log, playerService, interpreterService, $location, $anchorScroll) {
  $log.debug('PlayerInputController');

  this.interpretCommand = function(command) {
    let baseCommand = command.toLowerCase().split(' ')[0];
    if (baseCommand === '') return;
    let commandArgs = command.toLowerCase().split(baseCommand).join('').trim();
    this.command = '';

    if (!interpreterService.acceptableCommands[baseCommand]) {
      playerService.player.feedback = 'I\'m not sure what you\'re trying to do.';
      return $log.error('That is not an acceptable command.');
    }

    if (interpreterService.acceptableCommands[baseCommand] === 'direction') playerService.movePlayer(baseCommand);

    if (interpreterService.acceptableCommands[baseCommand] === 'add inventory') playerService.addInventory(commandArgs);

    if (interpreterService.acceptableCommands[baseCommand] === 'remove inventory') playerService.removeInventory(commandArgs);

    if (interpreterService.acceptableCommands[baseCommand] === 'check inventory') playerService.listInventory();

    if (interpreterService.acceptableCommands[baseCommand] === 'help') playerService.player.feedback = interpreterService.help();

    setTimeout(function() {
      $location.hash('bottom');
      $anchorScroll();
    }, 0);
  };
}
