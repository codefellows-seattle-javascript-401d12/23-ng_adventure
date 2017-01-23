'use strict';

const angular = require('angular');
const ngSoundSearch = angular.module('ngSoundSearch');

ngSoundSearch.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    entrance: {
      currentLocation: 'Entrance',
      desc: 'Nice! You got in to the show! Hurry to the main stage to see your favorite artist!',
      down: 'coatCheck'
    },
    coatCheck: {
      currentLocation: 'Coat Check',
      desc: 'Leave your heavy coat here, things will get way too hot when you are in the mix.',
      down: 'merchandise',
      right: 'pathwayToNoise',
      up: 'entrance'
    },
    merchandise: {
      currentLocation: 'Merchandise',
      desc: 'You found the merch tables! Snag some gear and get moving!',
      up: 'coatCheck'
    },
    pathwayToNoise: {
      currentLocation: 'Pathway to Noise',
      desc: 'Keep moving through the crowd!',
      right: 'superSonicStage',
      left: 'coatCheck'
    },
    superSonicStage: {
      currentLocation: 'Super Sonic Stage',
      desc: 'You made it to the Super Sonic Stage. Looks like the openers are still playing. You still got time!',
      up: 'beerGarden',
      left: 'pathwayToNoise',
      right: 'pathwayToRelief'
    },
    beerGarden: {
      currentLocation: 'Beer Garden',
      desc: 'Nice, you found the beer garden! Grab a quick refreshment and chug it cause you done have much time.',
      down: 'superSonicStage'
    },
    pathwayToRelief: {
      currentLocation: 'Pathway to Relief',
      desc: 'Keep on moving, you are getting closer to the main stage. Looks like a restroom is nearby if you need some relief.',
      right: 'restrooms',
      left: 'superSonicStage',
      down: 'pathwayOfPulsation'
    },
    restrooms: {
      currentLocation: 'Restrooms',
      desc: 'Take quick moment to use the restroom. You do not want to leave the main stage once you get in.',
      left: 'pathwayToRelief'
    },
    pathwayOfPulsation: {
      currentLocation: 'Pathway of Pulsation',
      desc: 'The ground is starting to shake and your skin feels the rhythm.',
      down: 'bassToTheFace'
    },
    bassToTheFace: {
      currentLocation: 'Bass to the Face Stage',
      desc: 'You are at the Bass to the Face stage. Some hard hitting beats is making your face melt, keep moving!',
      up: 'pathwayOfPulsation',
      left: 'pathwayToDrop'
    },
    pathwayToDrop: {
      currentLocation: 'Pathway to the Drop',
      desc: 'Just cut through this crowd and you are there!',
      down: 'dynamicsOfLife',
      left: 'nextBeerGarden'
    },
    nextBeerGarden: {
      currentLocation: 'Beer Garden',
      desc: 'Drink up quick! Your favoirte artist is about go on!',
      right: 'pathwayToDrop',
    },
    dynamicsOfLife: {
      currentLocation: 'Dynamics of Life Main Stage',
      desc: 'Yay! You made it the Dynamics of Life Main Stage! Your favorite artist is just about to start, you did it!',
      image: '/assets/img/music-festival.jpg'
    }
  };

  return service;
}
