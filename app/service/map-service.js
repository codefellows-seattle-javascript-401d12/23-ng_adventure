'use strict';

const angular = require('angular');
const ngSoundSearch = angular.module('ngSoundSearch');

ngSoundSearch.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    entrance: {
      desc: 'Nice! You got in to the show! Hurry to the main stage to see your favorite artist!',
      down: 'coatCheck',
      right: 'room',
      image: 'http://moneyinc.com/wp-content/uploads/2016/05/Summer-Music-Festival.jpg'
    },
    coatCheck: {
      desc: 'Leave your heavy coat here, things will get way too hot when you are in the mix.',
      down: 'merchandise',
      right: 'pathwayToNoise',
      up: 'entrance',
      image: 'http://moneyinc.com/wp-content/uploads/2016/05/Summer-Music-Festival.jpg'
    },
    merchandise: {
      desc: 'You found the merch tables! Snag some gear and get moving!',
      up: 'coatCheck'
    },
    pathwayToNoise: {
      desc: 'Keep moving through the crowd!',
      right: 'superSonicStage',
      left: 'coatCheck'
    },
    superSonicStage: {
      desc: 'You made it to the Super Sonic Stage. Looks like the openers are still playing. You still got time!',
      up: 'beerGarden',
      left: 'pathwayToNoise',
      right: 'pathwayToRelief'
    },
    beerGarden: {
      desc: 'Nice, you found the beer garden! Grab a quick refreshment and chug it cause you done have much time.',
      down: 'superSonicStage'
    },
    pathwayToRelief: {
      desc: 'Keep on moving, you are getting closer to the main stage. Looks like a restroom is nearby if you need some relief.',
      right: 'restrooms',
      left: 'superSonicStage',
      down: 'pathwayOfPulsation'
    },
    restrooms: {
      desc: 'Take quick moment to use the restroom. You do not want to leave the main stage once you get in.',
      left: 'pathwayToRelief'
    },
    pathwayOfPulsation: {
      desc: 'The ground is starting to shake and your skin feels the rhythm.',
      down: 'bassToTheFace'
    },
    bassToTheFace: {
      desc: 'You are at the Bass to the Face stage. Some hard hitting beats is making your face melt, keep moving!',
      up: 'pathwayOfPulsation',
      left: 'pathwayToDrop'
    },
    pathwayToDrop: {
      desc: 'Just cut through this crowd and you are there!',
      down: 'dynamicsOfLife',
      left: 'nextBeerGarden'
    },
    nextBeerGarden: {
      desc: 'Drink up quick! Your favoirte artist is about go on!',
      right: 'pathwayToDrop',
    },
    dynamicsOfLife: {
      desc: 'Yay! You made it the Dynamics of Life Main Stage! Your favorite artist is just about to start, you did it!'
    }
  };

  return service;
}
