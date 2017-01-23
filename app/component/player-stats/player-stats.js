'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.component('stats', {
  template: require('./player-stats.html'),
  controller: 'PlayerStatsController',
  controllerAs: 'playerStatsCtrl'
});

ngEscape.controller('PlayerStatsController', ['$log', 'playerService', PlayerStatsController]);

function PlayerStatsController($log, playerService) {
  $log.debug('PlayerStatsController');

  this.playerStats = playerService.player;
}
