'use strict';

const angular = require('angular');
const ngMarsMission = angular.module('ngMarsMission');

ngMarsMission.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl'
});

ngMarsMission.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);

function GameHistoryController($log, playerService) {
  $log.debug('GameHistoryController');
  this.history = playerService.history;
};
