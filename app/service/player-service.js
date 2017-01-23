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
      description: 'You are standing on the front porch of an abandoned house. To the north is the front door, it is ajar.',
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
          description: 'You cannot go in that direction.',
          location: player.location,
          inventory: player.inventory
        });
        return reject('There is not a room in that direction.');
      }

      player.location = newLocation;

      // TODO switch next three statements to be inventory array
      // if((player.location === 'den') && (player.inventory !== 'matches')) {
      //   player.inventory += 'matches';
      // }
      //
      // if((player.location === 'diningroom') && (player.inventory !== 'candle')) {
      //   player.inventory += 'candle';
      // }
      //
      // if((player.location === 'pantry') && (player.inventory !== 'key')) {
      //   player.inventory += 'key';
      // }

      // NOTE: keep until I know I don't want to do something with the JS at the end of the game
      // if(player.location === 'stairs') {
      //   console.log('THE END');
      // }

      history.unshift({
        turn,
        location: player.location,
        description: mapService.mapData[newLocation].description,
        inventory: player.inventory
      });

      return resolve(player.location);
    });
  };

  return service;
}
