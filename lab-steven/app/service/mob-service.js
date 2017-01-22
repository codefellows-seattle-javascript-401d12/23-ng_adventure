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
    longDesc: 'A large black rat is here, soaking wet from the rain, but sniffing around curiously.',
    description: 'Looking every bit the part of a drowned rat that should\'ve escaped its sinking ship, this creature instead seems quite resilient to the environment. It appears quite well-fed, with a fullness to its admittedly large body. Its beady eyes frequently shift from staring blankly, taking in its surroudings, to focusing intently on some random unseen location or object. Occasionally it stops to futilely groom itself, licking its paws before running them over the back of its wet head.',
    attack: 'A large black rat bites you!',
    hp: 5,
    atk: 2,
    inventory: []
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
