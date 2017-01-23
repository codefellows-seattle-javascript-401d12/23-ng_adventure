'use strict';

const angular = require('angular');
const angularAdventure = angular.module('angularAdventure');

angularAdventure.component('gameboard', {
  template: require('./gameboard.html'),
  controller: 'GameboardController',
  controllerAs: 'gameboardControl'
});

angularAdventure.controller('GameboardController', ['$log',  'playerService', GameboardController]);

function GameboardController($log, playerService) {
  $log.debug('GameboardController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.move = this.directions[0];
  console.log(this.move);

  this.movePlayer = function() {
    playerService.movePlayer(this.move)
    .then( location => {
      $log.log(`player location: ${location.split('_').join(' ')}`);
    })
    .catch( err => {
      $log.error(err);
    });
  };
};
