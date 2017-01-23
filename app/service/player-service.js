'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('playerService');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'our victim',
    location: 'porch',
    inventory: ''
  };

  let history = service.history = [
    {
      turn,
      description: 'game start message',
      location: 'porch',
      inventory: player.inventory
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'You cannot go in that direction.',
          location: player.location,
          inventory: player.inventory
        });
        return reject('There is not a room in that direction.');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        inventory: player.inventory
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}
