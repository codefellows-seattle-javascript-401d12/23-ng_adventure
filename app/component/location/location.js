'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.component('location', {
  template: require('./location.html'),
  controller: 'LocationController',
  controllerAs: 'locationCtrl'
});

ngEscape.controller('LocationController', ['$log', 'playerService', LocationController]);

function LocationController($log, playerService) {
  $log.debug('LocationController');

  this.locationDesc = playerService.player;
}
