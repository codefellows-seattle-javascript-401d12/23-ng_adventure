'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('mobService', ['$log', mobService]);

function mobService($log) {
  $log.log('Mob service.');

  let service = {};

  service.rat = {
    keywords: ['rat', 'black', 'black rat'],
    shortDesc: 'a black rat',
    longDesc: 'A large black rat is here, sniffing around curiously.'
  };

  return service;
}
