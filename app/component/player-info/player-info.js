'use strict';

const angular = require('angular');
const  ngSoundSearch = angular.module('ngSoundSearch');

ngSoundSearch.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl'
});

ngSoundSearch.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService) {
  $log.debug('PlayerInfoController');
  this.player = playerService.player;
}
