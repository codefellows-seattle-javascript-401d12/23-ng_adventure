'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.component({
  template: require('./player-input.html'),
  controller: 'PlayerInputController',
  controllerAs: 'playerInputCtrl'
});

adventureGame.controller('PlayerInputController', ['$log', 'playerService', PlayerInputController]);

function PlayerInputController($log, playerService) {
  $log.debug('PlayerInputController');

  this.directions = ['north', 'west', 'east', 'south'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then(location => $log.log(`player currently at ${location}`))
    .catch(err => $log.error(err));
  };
}
