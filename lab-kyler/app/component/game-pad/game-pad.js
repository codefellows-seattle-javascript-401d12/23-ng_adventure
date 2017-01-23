'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gamePad', { //camelcased word here yields a kabob-case component?
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl' //this way, don't have to put ng-controller in HTML
});

ngAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService) {
  $log.debug('GamePadController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function(direction) {
    playerService.movePlayer(direction)
    .then( newLocation => {
      $log.log(`player currently at: ${newLocation}`);
    })
    .catch( err => {
      $log.error(err);
    });
  };
}
