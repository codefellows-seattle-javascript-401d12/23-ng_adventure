'use strict';

const angular = require('angular');
const treasureQuest = angular.module('treasureQuest');

treasureQuest.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl'
});

treasureQuest.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);

function GameHistoryController($log, playerService) {
  $log.debug('GameHistoryController');

  this.history = playerService.history;  
};
