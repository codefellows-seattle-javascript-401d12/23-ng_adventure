'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('playerService', ['$log', '$q', 'mapService', playerService]);

function playerService($log, $q, mapService) {
  $log.debug('playerService');

  let service = {};

  service.player = {
    name: 'Sample name',
    location: 'room1'
  };

  service.history = [
    {
      desc: 'Welcome to the game',
      location: service.player.location
    }
  ];

  service.movePlayer = function(direction) {
    if (direction === 'n') direction = 'north';
    if (direction === 'e') direction = 'east';
    if (direction === 'w') direction = 'west';
    if (direction === 's') direction = 'south';
    
    return new $q((resolve, reject) => {
      let newLocation = mapService.mapData[service.player.location][direction];

      if (!newLocation) {
        service.history.unshift({
          desc: 'You can\'t go that way',
          location: service.player.location
        });
        return reject('You can\'t go that way.');
      }

      service.player.location = newLocation;

      service.history.unshift({
        desc: mapService.mapData[newLocation].desc,
        location: service.player.location,
      });

      return resolve(service.player.location);
    });
  };

  return service;
}
