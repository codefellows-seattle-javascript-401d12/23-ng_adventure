'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

ngAdventure.controller('GamePadController', ['$log', 'playerService', 'selectBoxService', GamePadController]);

function GamePadController($log, playerService, selectBoxService) {
  $log.debug('GamePadController');

  this.selectBoxService = selectBoxService;

  this.movePlayer = function() {
    playerService.movePlayer(selectBoxService.moveDirection)
    .then( location => {
      $log.log(`player currently at: ${location}`);
    })
    .catch( err => {
      $log.error(err);
    });
  };

  this.resetGame = function() {
    playerService.resetGame();
  };
}
