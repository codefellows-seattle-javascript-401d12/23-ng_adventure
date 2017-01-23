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

  service.thug = {
    keywords: ['man', 'thug', 'rough', 'shady', 'shady-looking'],
    shortDesc: 'a rough thug',
    longDesc: 'A shady-looking thug stands here, eyeing you suspiciously.',
    description: 'Wearing a garb of patchwork clothes, this somewhat hulking figure watches your every move carefully. He\'s holding a simple key, idly twirling it in his grasp and letting it dance across his knuckles. In his other hand, he\'s holding a mean-looking knife. His face has a long scar across his nose, with a disfiguring mark running up the side of his cheek and over a now milky-white eye, with much of his appearance obscured by a hood that hangs over the top half of his visage.',
    attack: 'A rough thug stabs you!',
    hp: 10,
    atk: 3,
    inventory: [itemService.gameItems.healingPotion, itemService.gameItems.key, itemService.gameItems.manaPotion]
  };

  service.belzar = {
    keywords: ['belzar'],
    shortDesc: 'Belzar',
    longDesc: 'Belzar is here, floating above the ground, awaiting your challenge.',
    description: 'Belzar is a rival mage blocking the entrance to the tower. He\'s dressed in blue and purple robes that flow around him like a shielding second skin. His face is masked, a solid white, smooth piece of porcelain hiding everything from view. Even the eyes of the mask are dim, a subtle purple glow the only indication of his sight. An ornate key hangs from his belt, the only way into the tower.',
    attack: 'Belzar hurls a crackling ball of energy at you!',
    hp: 25,
    atk: 5,
    inventory: [itemService.gameItems.ornateKey]
  };

  return service;
}
