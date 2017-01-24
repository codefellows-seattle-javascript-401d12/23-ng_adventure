'use strict';

const angular = require('angular');
const ngMarsMission = angular.module('ngMarsMission');

ngMarsMission.factory('playerService', ['$q', '$log', 'mappingService', playerService]);

function playerService($q, $log, mappingService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'humanSurvivalSpecimen03',
    location: 'arcadiaPlanitia',
    hp: 30
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to ngMarsMission',
      location: 'arcadiaPlanitia',
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mappingService.mapData[current][direction];

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'Zoiks! You are blocked by an impassable crater.',
          location: current,
          hp: player.hp -= 1
        });
        return reject('No Mars station in that zone.');
      };

      history.unshift({
        turn,
        location: newLocation,
        desc: mappingService.mapData[newLocation].desc,
        hp: player.hp
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };
  return service;
};
