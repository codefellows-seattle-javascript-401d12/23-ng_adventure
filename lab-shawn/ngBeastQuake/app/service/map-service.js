'use strict';

const angular = require('angular');
const ngBeastQuake = angular.module('ngBeastQuake');

ngBeastQuake.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    'Line Of Scrimmage': {
      desc: 'Its 2nd Down and 10 yards to go. The ball is on the 33 yard line. Man goes in motion, balls hiked. Hasselback turns and hands off to Lynch. Left side.',
      'go upfield': 'Up The Middle'
    },
    'Up The Middle': {
      desc: 'Lynch cuts back to the middle. He finds a little bit of a hole. Keeps the legs moving. He\'s across the 40. Midfield. 45.',
      'cut right': 'Running Towards Sideline'
    },
    'Running Towards Sideline': {
      desc: 'Lynch cuts right towards the sideline. He\'s on the run, 40. Puts out a stiff arm, throws a man to the ground, 35.',
      'go upfield': 'Headed Upfield'
    },
    'Headed Upfield': {
      desc: 'Lynch turns upfield 30. Look at him go.',
      'go upfield': 'Running The Sideline'
    },
    'Running The Sideline': {
      desc: 'Lynch is down the sideline. He\'s got a blocker ahead of him. 20. 15.',
      'cut left': 'Cutting To The Middle'
    },
    'Cutting To The Middle': {
      desc: 'Lynch cuts back to the middle, 10. He could go. He is going to go, 5.',
      'go upfield': 'Endzone'
    },
    'Endzone': {
      desc: 'Touchdown Seahawks. Oh my word. A 67 yard run. Marshawn Lynch. Unbelievable.'

    }
  };
  return service;
}
