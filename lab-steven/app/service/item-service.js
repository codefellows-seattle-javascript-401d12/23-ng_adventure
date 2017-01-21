'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('itemService', ['$log', itemService]);

function itemService($log) {
  $log.log('itemService');

  let service = {};

  service.gameItems = {
    key: {
      keywords: ['key', 'simple', 'simple key'],
      shortDesc: 'a simple key',
      longDesc: 'A simple key is lying on the floor here.',
      description: 'This is a simple key\'s description.'
    },
    blueKey: {
      keywords: ['key', 'blue', 'blue key'],
      shortDesc: 'a blue key',
      longDesc: 'An ornate blue key is lying on the floor here.',
      description: 'This is an ornate blue key\'s description.'
    },
    redKey: {
      keywords: ['red', 'key', 'red key'],
      shortDesc: 'a red key',
      longDesc: 'A fiery, magical red key is lying on the floor here.',
      description: 'This is a red key\'s description.'
    }
  };

  return service;
}
