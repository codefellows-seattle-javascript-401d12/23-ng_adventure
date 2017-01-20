'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.component('playerInput', {
  template: require('./player-input.html'),
  controller: 'PlayerInputController',
  controllerAs: 'playerInputCtrl'
});

adventureGame.controller('PlayerInputController', ['$log', 'playerService', 'interpreterService', PlayerInputController]);

function PlayerInputController($log, playerService, interpreterService) {
  $log.debug('PlayerInputController');

  this.interpretCommand = function(command) {
    command = command.toLowerCase();
    if (!interpreterService.acceptableCommands[command]) return $log.error('That is not an acceptable command.');

    if (interpreterService.acceptableCommands[command] === 'direction') {
      playerService.movePlayer(command)
      .then(location => {
        $log.log(`Player currently at ${location}`);
      })
      .catch(err => $log.error(err));
    }
    this.command = '';
  };
}
