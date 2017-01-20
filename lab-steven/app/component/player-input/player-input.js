'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.component('playerInput', {
  template: require('./player-input.html'),
  controller: 'PlayerInputController',
  controllerAs: 'playerInputCtrl'
});

adventureGame.controller('PlayerInputController', ['$log', 'playerService', PlayerInputController]);

function PlayerInputController($log, playerService) {
  $log.debug('PlayerInputController');

  this.movePlayer = function(direction) {
    direction = direction.toLowerCase();
    if (direction === 'n') direction = 'north';
    if (direction === 'w') direction = 'west';
    if (direction === 'e') direction = 'east';
    if (direction === 's') direction = 'south';

    playerService.movePlayer(direction)
    .then(location => {
      $log.log(`player currently at ${location}`);
      this.direction = '';
    })
    .catch(err => $log.error(err));
  };
}
