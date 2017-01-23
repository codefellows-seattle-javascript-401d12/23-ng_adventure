'use strict';

const angular = require('angular');
const ngBeastQuake = angular.module('ngBeastQuake');

ngBeastQuake.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl'
});

ngBeastQuake.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);

function GameHistoryController($log,playerService){
  $log.debug('GameHistoryController');

  this.history = playerService.history;

}
