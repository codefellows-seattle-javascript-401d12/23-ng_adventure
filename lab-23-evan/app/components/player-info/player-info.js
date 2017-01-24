'use strict';

const angular = require('angular');
const treasureQuest = angular.module('treasureQuest');

treasureQuest.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl'
});

treasureQuest.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService) {
  $log.debug('PlayerInfoController');
  this.player = playerService.player;
};
