'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('mobService', ['$log', 'itemService', mobService]);

function mobService($log, itemService) {
  $log.log('Mob service.');

  let service = {};

  service.rat = {
    keywords: ['rat', 'black', 'black rat'],
    shortDesc: 'a black rat',
    longDesc: 'A large black rat is here, sniffing around curiously.',
    description: 'It\'s a hairy black rat.',
    attack: 'A large black rat bites you!',
    hp: 5,
    atk: 2,
    inventory: [itemService.gameItems.key]
  };

  service.turtle = {
    keywords: ['black', 'turtle', 'black turtle'],
    shortDesc: 'a black turtle',
    longDesc: 'A big black turtle is chilling here.',
    description: 'It\'s a turtle. But black.',
    attack: 'A big black turtle snaps at you with its powerful jaws!',
    hp: 10,
    atk: 3,
    inventory: []
  };

  return service;
}
