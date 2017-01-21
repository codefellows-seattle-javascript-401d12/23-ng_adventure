'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.component('gameWindow', {
  template: require('./game-window.html'),
  controller: 'GameWindowController',
  controllerAs: 'gameWindowCtrl'
});

adventureGame.controller('GameWindowController', ['$log', 'mapService', 'itemService', 'playerService', 'combatService', GameWindowController]);

function GameWindowController($log, mapService, itemService, playerService, combatService) {
  $log.debug('Game Window Controller');

  this.combatLog = combatService.combatLog;
  this.combat = combatService;
  this.mapData = mapService.mapData;
  this.player = playerService.player;
  this.gameItems = itemService.gameItems;
}
