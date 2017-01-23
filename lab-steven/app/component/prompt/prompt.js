'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.component('prompt', {
  template: require('./prompt.html'),
  controller: 'PromptController',
  controllerAs: 'promptCtrl'
});

adventureGame.controller('PromptController', ['$log', 'playerService', 'combatService', PromptController]);

function PromptController($log, playerService, combatService) {
  $log.debug('Prompt Controller');
  this.combat = combatService;
  this.player = playerService.player;
}
