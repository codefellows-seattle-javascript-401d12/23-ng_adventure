'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.component('prompt', {
  template: require('./prompt.html'),
  controller: 'PromptController',
  controllerAs: 'promptCtrl'
});

adventureGame.controller('PromptController', ['$log', 'playerService', PromptController]);

function PromptController($log, playerService) {
  $log.debug('Prompt Controller');
  this.player = playerService.player;
}
