'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.component('islandImage', {
  template: require('./island.html'),
  controller: 'IslandImageController',
  controllerAs: 'islandImageCtrl'
});

ngEscape.controller('IslandImageController', ['$log', 'playerService', IslandImageController]);

function IslandImageController($log, playerService) {
  $log.debug('IslandImageController');

  this.islandImage = playerService.player;

  console.log(this.islandImage.image);
}
