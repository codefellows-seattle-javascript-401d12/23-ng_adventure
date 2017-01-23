'use strict';

const angular = require('angular');
const ngBeastQuake = angular.module('ngBeastQuake');

ngBeastQuake.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

ngBeastQuake.controller('GamePadController',['$log','playerService', 'mapService', GamePadController]);

function GamePadController($log, playerService, mapService){
  $log.debug('GamePadController');
  this.mapService = mapService;
  this.playerService = playerService;
  this.directions = ['cut left', 'go upfield', 'cut right'],
  this.movePlayer = function(direction){
    playerService.movePlayer(direction)
    .then(location => {
      $log.log(playerService.currentDesc);
      $log.log(`player is at ${location}`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
}
