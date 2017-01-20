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
    command = command.toLowerCase();
    this.command = '';
    if (!interpreterService.acceptableCommands[command]) {
      playerService.player.feedback = 'I\'m not sure what you\'re trying to do.';
      return $log.error('That is not an acceptable command.');
    }

    if (interpreterService.acceptableCommands[command] === 'direction') {
      playerService.movePlayer(command)
      .then(location => {
        $log.log(`Player currently at ${location}`);
      })
      .catch(err => $log.log(err));
    }
    setTimeout(function() {
      $location.hash('bottom');
      $anchorScroll();
    }, 0);
  };
}
