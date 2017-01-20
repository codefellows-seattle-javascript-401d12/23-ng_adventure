'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('playerService', ['$log', '$q', 'mapService', playerService]);

function playerService($log, $q, mapService) {
  $log.debug('playerService');

  let service = {};

  service.player = {
    name: 'Monkay',
    location: 'room1',
    hp: 20,
    maxHP: 20,
    mp: 20,
    maxMP: 20,
    feedback: 'Welcome to the game.'
  };

  service.player.history = [];

  service.movePlayer = function(direction) {
    if (direction === 'n') direction = 'north';
    if (direction === 'e') direction = 'east';
    if (direction === 'w') direction = 'west';
    if (direction === 's') direction = 'south';

    return new $q((resolve, reject) => {
      let newLocation = mapService.mapData[service.player.location].exits[direction];

      if (!newLocation) {
        service.player.feedback = `You can't go ${direction}.`;
        return reject(`Player can't go ${direction}.`);
      }

      service.player.history.push(service.player.location);
      $log.log(service.player.history);

      service.player.location = newLocation;
      service.player.feedback = `You move ${direction}.`;
      return resolve(service.player.location);
    });
  };

  return service;
}
