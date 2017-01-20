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

  this.roomTitle = mapService.mapData[playerService.player.location].title;
  this.roomDescription = mapService.mapData[playerService.player.location].desc;
  this.roomExits = mapService.mapData[playerService.player.location].exits;
}
