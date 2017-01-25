'use strict';

const angular = require('angular');
const angularAdventure = angular.module('angularAdventure');

angularAdventure.component('playerDashboard', {
  template: require('./player-dashboard.html'),
  controller: 'PlayerDashController',
  controllerAs: 'playerDashControl',
});

angularAdventure.controller('PlayerDashController', ['$log', 'playerService', PlayerDashController]);

function PlayerDashController($log, playerService) {
  $log.debug('PlayerDashController');
  this.player = playerService.player;
  this.history = playerService.history;
};
