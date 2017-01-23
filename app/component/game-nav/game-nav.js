'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.component('gameNav', {
  template: require('./game-nav.html'),
  controller: 'GameNavController',
  controllerAs: 'gameNavCtrl'
});

ngEscape.controller('GameNavController', ['$log', '$scope', '$window', 'playerService', GameNavController]);

function GameNavController($log, $scope, $window, playerService) {
  $log.debug('GameNavController');

  this.direction = {
    location: '',
  };

  this.movePlayer = function() {
    playerService.movePlayer(this.direction)
    .then( location => {
      $log.log(`player currently at ${location}`);
      if( location === 'raft') {
        $window.alert('You have ecaped the Island!!!');
        playerService.player.profileImage = '/app/images/mario_win.gif';
      }

    })
    .catch( err => {
      $log.error(err);
      $window.alert(err);
    });
  };
}
