'use strict';

const angular = require('angular');
const ngSoundSearch = angular.module('ngSoundSearch');

ngSoundSearch.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('playerService');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'Moezart',
    location: 'entrance',
    hp: 0,
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to Sound Search! Make your way through the venue to the main stage to see your favorite artists! Hurry, they are going to start soon!',
      location: 'entrance',
      hp: player.hp
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
          desc: 'Looks like you can not go that way',
          location: player.location,
          hp: player.hp
        });
        return reject('Nothing there.');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp,
        image: mapService.mapData.image
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };
  return service;
}
