'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('playerService');

  let service = {};

  let player = service.player = {
    location: 'beach',
    locationDesc: 'The beach is deserted, there is nothing around you and no signs of life. You spot in the distance a volcano. Your options are to head back out into the OCEAN and try to swim to rescue or head towards the VOLCANO',
    image: '/app/images/beach.jpg',
    turns: 0,
    water: 10,
    profileImage: '/app/images/mario.gif'
  };

  console.log(player);

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {

      let movePossibilities = [];

      (function() {
        for (var option in mapService.mapData[player.location]) {
          if(/^option[1-9]*/.test(option)) movePossibilities.push(mapService.mapData[player.location][option]);
        }
      }());

      let moveDirection = movePossibilities.indexOf(direction.location);

      if(moveDirection === -1) {
        
        if(player.water <= 0) {
          player.profileImage = '/app/images/dead_mario.gif';
          return reject('you have died');
        }

        player.turns += 1;
        player.water -= 1;


        return reject('not a viable move direction');
      }

      if(moveDirection !== -1) {
        player.turns += 1;
        player.water -= 1;

        player.location = direction.location;
        player.locationDesc = mapService.mapData[player.location].desc;
        player.image = mapService.mapData[player.location].image;
      }


      console.log(player);
      return resolve(direction.location);
    });
  };

  return service;
}
