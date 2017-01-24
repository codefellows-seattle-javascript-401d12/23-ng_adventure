'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$window', '$q', '$log', 'mapService', 'selectBoxService', playerService]);


function playerService($window, $q, $log, mapService, selectBoxService) {
  $log.debug('playerService');

  let service = {};

  let turn = 0;

  let player = service.player = {
    name: 'emock',
    location: 'city',
    hp: 11
  };

  let history = service.history = [
    {
      turn,
      desc: 'Zombies have taken over your city! You are on your own and you must escape! Make sure that you stay on course or you will become the next zombie meal...',
      location: 'city',
      hp: player.hp
    }
  ];

  service.initialDirection = function() {
    selectBoxService.moveDirection = selectBoxService.directions[0];
  };

  service.resetGame = function() {
    player.location = 'city';
    player.hp = 11;
    history.splice(0, history.length - 1);
    turn = 0;
    service.initialDirection();
  };

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'You cannot go that way! Danger awaits you if you continue straying into the shadows. You also cannot waste time or you will die of starvation.',
          location: player.location,
          hp: player.hp--
        });

        if (player.hp === 0) {
          $window.alert('You have died of starvation and could not make it to the next town. Would you like to play again?');
          service.resetGame();
          return;
        }

        return reject('You cannot go that way!');
      }

      player.location = newLocation;

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp
      });

      if (player.location === 'town') {
        $window.alert(`Great job! You have survived and made it to the next ${player.location}!`);
      }

      return resolve(player.location);
    });
  };

  return service;
}
