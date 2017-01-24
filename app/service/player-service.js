'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('playerService');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'dbecks',
    location: 'FremontBrewing',
    hp: 12
  };

  let history = service.history = [
    {
      turn,
      desc: 'Ready to get drunk? Grab a beer and then choose a direction to the next bar',
      location: 'FremontBrewing',
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;
      player.hp--;
      if (player.hp === 0) {
        alert('Go Home, you are too drunk to navigate');
      }
      $log.log(direction);
      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(current === 'BalMar') {
        alert('You have been X-ed out....Go home. GAME OVER');
      }

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'that is not a safe exit',
          location: player.location,
          hp: player.hp
        });
        return reject('the next bar is not that direction');
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
