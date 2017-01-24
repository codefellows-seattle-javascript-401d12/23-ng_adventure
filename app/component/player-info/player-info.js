'use strict';

const angular = require('angular');
const ngMarsMission = angular.module('ngMarsMission');

ngMarsMission.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl'
});

ngMarsMission.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService) {
  $log.debug('PlayerInfoController');

  this.player = playerService.player;
};
