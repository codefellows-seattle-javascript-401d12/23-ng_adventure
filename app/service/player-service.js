'use strict';

const angular = require('angular');
const angularAdventure = angular.module('angularAdventure');

angularAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'captain kork',
    location: 'start',
    oxygen: 12
  };

  let history = service.history = [
    {
      turn,
      description: 'Welcome aboard the space research station Vasa',
      location: 'start',
      oxygen: player.oxygen
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if (!newLocation) {
        history.unshift({
          turn,
          description: 'there\'s no place to go in that direction!',
          location: player.location.split('_').join(' '),
          oxygen: player.oxygen,
        });
        return reject('no room in that direction');
      };

      if (newLocation === 'medical_station') {
        if (!mapService.mapData[current].visited) {
          mapService.mapData[current]['visited'] = true;

          history.unshift({
            turn,
            location: player.location.split('_').join(' '),
            description: mapService.mapData[newLocation].description,
            oxygen: player.oxygen += 7
          });

          player.location = newLocation;
          return resolve(player.location);
        }
      }

      mapService.mapData[current]['visited'] = true;
      history.unshift({
        turn,
        location: player.location.split('_').join(' '),
        description: mapService.mapData[newLocation].description,
        oxygen: player.oxygen -= 1,
      });
      player.location = newLocation;
      return resolve(player.location);
    });
  };
  return service;
};
