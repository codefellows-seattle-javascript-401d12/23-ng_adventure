'use strict';

const angular = require('angular');
const ngSoundSearch = angular.module('ngSoundSearch');

ngSoundSearch.factory('mapService', ['$log', mapService]);

function mapServce($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    entrance: {
      desc: 'Nice! You got in to the show! Hurry to the main stage to see your favorite artist!',
      down: 'coatCheck'
    },
    coatCheck: {
      desc: 'Leave your heavy coat here, things will get way too hot when you are in the mix.',
      down: 'merchandise',
      right: 'pathwayToNoise'
    },
    merchandise: {
      desc: 'You found the merch tables! Snag some gear and get moving!',
      up: 'coatCheck'
    },
    pathwayToNoise: {
      desc: 'Keep moving!',
      right: 'superSonicStage'
    },
    
  }
}
