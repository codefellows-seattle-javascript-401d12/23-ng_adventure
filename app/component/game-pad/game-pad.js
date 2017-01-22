'use strict';

const angular = require('angular');
const ngSoundSearch = angular.module('ngSoundSearch');

ngSoundSearch.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

ngSoundSearch.controller('GamePadController', ['$log', 'playerService', GamePadController ]);

function GamePadController($log, playerService) {
  $log.debug('GamePadController');

  this.directions = ['up', 'down', 'right', 'left'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then( location  => {
      $log.log(`player current at ${location}`);
    })
    .catch( err => {
      $log.error(err);
    });
  };
}
