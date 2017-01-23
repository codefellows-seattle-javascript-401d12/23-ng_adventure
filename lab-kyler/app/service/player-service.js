'use strict';

const angular = require('angular');
const mapService = require('./map-service.js');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('playerService');

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'kyler',
    location: 'entry',
    hp: 100
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to Code Fellows! Choose a direction to start exploring.',
      location: 'entry',
      hp: player.hp
    }
  ];



  service.movePlayer = function(direction) {
    return new $q( (resolve, reject) => { //Promise
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'You ran straight into a wall and ruined a whiteboard session.',
          location: player.location,
          hp: player.hp
        });
        return reject('no room in that direction');
      }

      player.location = newLocation;

      history.unshift({
        turn,
        desc: mapService.mapData[newLocation].desc,
        location: player.location,//what
        hp: player.hp
      });

      return resolve(player.location);
    });
  };
  return service;
}
