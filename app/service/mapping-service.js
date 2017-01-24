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
      down: "olympusMons"
    },
    olympusMons: {
      desc: "Welcome to the olympusMons station zone. Where will you go next, astronaut?",
      up: "arcadiaPlanitia",
      right: "acidaliaPlanitia",
      down: "tharsisMontes"
    },
    tharsisMontes: {
      desc: "Well done, astronaut. Keep on moving to find more science samples.",
      up: "olympusMons"
    },
    acidaliaPlanitia: {
      desc: "You are starting to run out of oxygen. It's time to get a move on.",
      left: "olympusMons",
      right: "vastitasBorealis"
    },
    vastitasBorealis: {
      desc: "Wow. This place feels inhabitable. Go to Utopia Planitia to survive.",
      left: "acidaliaPlanitia",
      right: "utopiaPlanitia"
    },
    utopiaPlanitia: {
      desc: "Congrats! You've reached the end of your journey! Welcome to Utopia Planitia! You have two years of supplies to survive! Good luck!",
      left: "vastitasBorealis"
    }
  };
  return service;
};
