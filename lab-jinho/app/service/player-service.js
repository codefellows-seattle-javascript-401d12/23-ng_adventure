'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'passenger',
    location: 'seatB2',
    hp: 10
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to ngAdventure',
      location: 'seatB2',
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;
      player.hp--;
      if (player.hp === 0) {
        return ('Captain has turned the seat belt light on, please remain in your seats.');
      }
      $log.log(direction);

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(current === 'seatA3') {
        return ('GAME OVER!');
      }

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'Not a seat',
          location: player.location,
          hp: player.hp
        });
        return reject('This is not an assigned seat.');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}
