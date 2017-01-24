'use strict';

const angular = require('angular');
const treasureQuest = angular.module('treasureQuest');

treasureQuest.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

treasureQuest.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService) {
  $log.debug('GamePadController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then( location => {
      $log.log(`player currently at ${location}`);
      this.addItems();
      this.addKnowledge();
      this.calculateHP();
      this.winOrDie();
    })
    .catch( err => {
      $log.error(err);
    });
  };
  this.addItems = function() {
    playerService.addItems();
  };
  this.addKnowledge = function() {
    playerService.addKnowledge();
  }
  this.calculateHP = function() {
    playerService.calculateHP();
  };
  this.winOrDie = function() {
    playerService.winOrDie();
  }  
};
