'use strict';

const angular = require('angular');
const ngBeastQuake = angular.module('ngBeastQuake');

ngBeastQuake.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('playerService');

  let service = {};
  let turn = 1;
  let player = service.player = {
    location: 'Line Of Scrimmage',
  };

  let history = service.history = [
    {
      turn,
      location: 'Line Of Scrimmage',
      desc: 'Its 2nd Down and 10 yards to go. The ball is on the 33 yard line. Man goes in motion, balls hiked. Hasselback turns and hands off to Lynch. Left side.',
      'go upfield': 'Up The Middle',
    }
  ];

  service.currentDesc = mapService.mapData['Line Of Scrimmage'].desc;
  service.touchdown = false;
  service.play = true;
  service.tackled = false;


  service.movePlayer = function(direction){
    return new $q((resolve,reject) => {

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation){

        history.unshift({
          turn,
          desc: 'Tackled',
          location: 'Line Of Scrimmage'
        });

        service.play = false;
        service.tackled = true;
        return reject('you got smothered, try again');
      }

      player.location = newLocation;
      service.currentDesc = mapService.mapData[newLocation].desc;

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc
      });
      if(player.location === 'Endzone'){
        service.touchdown = true;
        service.play = false;
      }
    });
  };

  service.retry = function(){
    turn++;
    service.play = true;
    service.tackled = false;
    service.touchdown = false;
    if(player.location === 'Endzone'){
      turn = 1;
    }
    player.location = 'Line Of Scrimmage';
    service.currentDesc = mapService.mapData[player.location].desc;

  };

  return service;
}
