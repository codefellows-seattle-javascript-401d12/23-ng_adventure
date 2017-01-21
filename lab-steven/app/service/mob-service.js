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
    longDesc: 'A large black rat is here, sniffing around curiously.',
    description: 'It\'s a hairy black rat.'
  };

  service.turtle = {
    keywords: ['black', 'turtle', 'black turtle'],
    shortDesc: 'a black turtle',
    longDesc: 'A big black turtle is chilling here.',
    description: 'It\'s a turtle. But black.'
  };

  return service;
}
