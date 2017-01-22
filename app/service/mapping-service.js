'use strict';

const angular = require('angular');
const ngMarsMission = angular.module('ngMarsMission');

ngMarsMission.factory('mappingService', ['$log', mappingService]);

function mappingService($log) {
  $log.debug('mapping service');

  let service = {};

  service.mapData = {
    arcadiaPlanitia: {
      desc: "Welcome to the arcadiaPlanitia station zone! Traverse these harsh lands wisely.",
      down: "olympusMons",
      up: null,
      left: null,
      right: null
    },
    olympusMons: {
      desc: "Welcome to the olympusMons station zone. Where will you go next, astronaut?",
      up: "arcadiaPlanitia",
      right: "acidaliaPlanitia",
      down: "tharsisMontes",
      left: null
    },
    tharsisMontes: {
      desc: "Well done, astronaut. Keep on moving to find more science samples.",
      up: "olympusMons",
      right: null,
      down: null,
      left: null
    },
    acidaliaPlanitia: {
      desc: "You are starting to run out of oxygen. It's time to get a move on.",
      left: "olympusMons",
      right: "vastitasBorealis",
      up: null,
      down: null
    },
    vastitasBorealis: {
      desc: "Wow. This place feels inhabitable. Go to Utopia Planitia to survive.",
      left: "acidaliaPlanitia",
      right: "utopiaPlanitia",
      up: null,
      down: null
    },
    utopiaPlanitia: {
      desc: "Welcome to Utopia Planitia! You have two years of supplies to survive! Good luck!",
      left: "vastitasBorealis",
      up: null,
      down: null,
      right: null
    }
  };
  return service;
};
