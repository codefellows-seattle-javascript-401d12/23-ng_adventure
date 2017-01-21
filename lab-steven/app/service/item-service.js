'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('itemService', ['$log', itemService]);

function itemService($log) {
  $log.log('itemService');

  let service = {};

  service.gameItems = {
    key: {
      keywords: ['key'],
      shortDesc: 'a simple key',
      longDesc: 'A simple key is lying on the floor here.'
    },
    blueKey: {
      keywords: ['key', 'blue'],
      shortDesc: 'a blue key',
      longDesc: 'An ornate, blue key is lying on the floor here.'
    },
    redKey: {
      keywords: ['red'],
      shortDesc: 'a red key',
      longDesc: 'A fiery, magical red key is lying on the floor here.'
    }
  };

  return service;
}
