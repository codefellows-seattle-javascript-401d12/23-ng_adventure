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
    if (!interpreterService.acceptableCommands[command]) return $log.error('That is not an acceptable command.');

    if (interpreterService.acceptableCommands[command] === 'direction') {
      playerService.movePlayer(command)
      .then(location => {
        $log.log(`Player currently at ${location}`);
      })
      .catch(err => $log.log(err));
    }
    this.command = '';
    setTimeout(function() {
      $location.hash('bottom');
      $anchorScroll();
    }, 0);
  };
}
