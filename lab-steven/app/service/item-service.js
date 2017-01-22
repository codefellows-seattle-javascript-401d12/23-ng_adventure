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
      longDesc: 'A simple key is lying on the ground here.',
      description: 'There\'s nothing intricate, ornate, or fantastic about this key. It\'s a simple, black, iron key with just two teeth in it.'
    },
    healingPotion: {
      keywords: ['potion', 'healing', 'healing potion'],
      shortDesc: 'a healing potion',
      longDesc: 'A red-colored potion whose hue seems to be constantly, subtly shifting is on the ground here.',
      description: 'Bottled in a flask with a wide, flat bottom and a narrow, long-necked top, this potion almost seems to shimmer when looked at in the right light. Healing potions are capable of restoring 10 HP when consumed with the DRINK command.',
      restoreValue: 10
    },
    manaPotion: {
      keywords: ['potion', 'mana', 'mana potion'],
      shortDesc: 'a mana potion',
      longDesc: 'A blue-colored potion whose contents are almost sickeningly thick is sitting on the ground here.',
      description: 'Contained within a bulbous flask, the potion seems almost more like a gel from its viscosity. Despite its awful taste and less-than-appetizing appearance, mana potions are well-known to be an excellent source of restoring magical energy. It can restore 10 MP when consumed with the DRINK command.',
      restoreValue: 10
    }
  };

  return service;
}
