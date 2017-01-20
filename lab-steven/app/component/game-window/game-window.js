'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.component('gameWindow', {
  template: require('./game-window.html'),
  controller: 'GameWindowController',
  controllerAs: 'gameWindowCtrl'
});

adventureGame.controller('GameWindowController', ['$log', 'mapService', 'playerService', GameWindowController]);

function GameWindowController($log, mapService, playerService) {
  $log.debug('Game Window Controller');

  this.mapData = mapService.mapData;
  this.player = playerService.player;
}
