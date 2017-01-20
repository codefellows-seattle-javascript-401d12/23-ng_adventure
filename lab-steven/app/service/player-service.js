'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('playerService', ['$log', '$q', 'mapService', playerService]);

function playerService($log, $q, mapService) {
  $log.debug('playerService');

  let service = {};

  service.player = {
    name: 'Sample name',
    location: 'room1',
    hp: 20,
    maxHP: 20,
    mp: 20,
    maxMP: 20,
    feedback: 'Welcome to the game.'
  };

  service.movePlayer = function(direction) {
    if (direction === 'n') direction = 'north';
    if (direction === 'e') direction = 'east';
    if (direction === 'w') direction = 'west';
    if (direction === 's') direction = 'south';

    return new $q((resolve, reject) => {
      let newLocation = mapService.mapData[service.player.location][direction];

      if (!newLocation) {
        service.player.feedback = 'You can\'t go that way.';
        return reject('Player can\'t go that way');
      }

      service.player.location = newLocation;
      service.player.feedback = `You move ${direction}.`;
      return resolve(service.player.location);
    });
  };

  return service;
}
