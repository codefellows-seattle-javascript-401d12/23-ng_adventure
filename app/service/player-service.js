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
      description: 'Deep in space aboard the research ship Vasa. The \'west\' section of the ship has been evacuated while you go in to investiage a malfunction. Deep into the eerily quiet \'west\' section, you feel the craft shudder, and seconds later, the emergency system alerts you that the section has lost its main oxygen supply in an explosion. You grab an emergency oxygen tank and mask and prepare to head for the airlock that will allow you to escape to one of the other undamaged sections. Each move you make depletes your oxygen a little, so you\'ll have to conserve. You know that your tank won\'t give you enough oxygen to make it all the way, so you\'ll need to find another tank somewhere between here and the airlock...',
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
        if (!mapService.mapData[newLocation].visited) {
          mapService.mapData[newLocation]['visited'] = true;

          history.unshift({
            turn,
            location: player.location.split('_').join(' '),
            description: mapService.mapData[newLocation].description,
            oxygen: player.oxygen += 7
          });

          mapService.mapData[newLocation]['description'] = 'you already got the oxygen tank!';
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
      if (player.oxygen < 1) player.end = 'out of oxygen...you are dead.';
      if (player.location === 'alien') player.end = 'you encounter a bloodthirsty alien...you are dead.';
      if (player.location === 'airlock') player.end = 'you made it to the airlock. congratulations!';
      return resolve(player.location);
    });
  };
  return service;
};
