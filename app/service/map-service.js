'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    porch: {
      description: 'You are standing on the porch of an abandoned house, facing NORTH. The front door is ajar.',
      north: 'entryway'
    },
    entryway: {
      description: 'You are in the front hall of the house, the wooden floors are uneven from age and the wallpaper is peeling off. It\'s dark here, the only light streaming in from the front door showing the dust floating in the air. To the NORTH is a dark corridor, to the EAST and WEST are doorways.',
      north: 'corridor',
      east: 'ballroom',
      south: 'porch',
      west: 'sittingroom'
    },
    sittingroom: {
      description: 'You have stepped into the sitting room. There is only one ruined chair here, the stuffing falling out. To the WEST is the door back to the entryway.',
      east: 'entryway'
    },
    ballroom: {
      description: 'You are in a cavernous ballroom, dusty cracked mirrors line one wall reflecting the weak light that is coming through the windows. A once-grand chandelier hangs crookedly over the center of the room, it looks dangerous to stand below it. There is a doorway to the EAST that will take you back to the entryway.',
      west: 'entryway'
    },
    corridor: {
      description: 'You walk into the dim corridor. There are doorways to the NORTH, WEST and EAST. You can return to the entryway to the SOUTH.',
      north: 'kitchen',
      east: 'diningroom',
      south: 'entryway',
      west: 'den'
    },
    den: {
      description: 'You have stepped into what was once a comfortable den. Cold air strems into the room from an empty fireplace. The shelves of the empty bookcase sag from rot. There is a door to the EAST that will take you back to the corridor.',
      east: 'corridor'
    },
    // NOTE: saved below to use when have inventory working
    // den: {
    //   description: 'You have stepped into what was once a comfortable den. Cold air strems into the room from an empty fireplace. The shelves of the empty bookcase sag from rot. There is a box of matches here. There is a door to the EAST that will take you back to the corridor.',
    //   east: 'corridor'
    // },
    diningroom: {
      description: 'You are in a dining room, light from outside comes through the cracked windows. Thick dust covers a huge table, no chairs remain. There is a fresh hand print in the dust. A door to the WEST will take you back into the corridor.',
      west: 'corridor'
    },
    // NOTE: saved below to use when have inventory working
    // diningroom: {
    //   description: 'You are in a dining room, light from outside comes through the cracked windows. Thick dust covers a huge table, no chairs remain. There is a fresh hand print in the dust. There is a candle here. A door to the WEST will take you back into the corridor.',
    //   west: 'corridor'
    // },
    kitchen: {
      description: 'You find yourself in a kitchen. A faucet is dripping into a large, rust stained sink. Peeling cabinet doors hang crooked on broken hinges. There are doors to the EAST and WEST. The door back to the corridor is to the SOUTH.',
      east: 'pantry',
      south: 'corridor',
      west: 'cellar'
    },
    pantry: {
      description: 'You find yourself in large pantry, dusty shelves hold a few pieces of broken crockery. The door back to the kitchen is to the WEST.',
      west: 'kitchen'
    },
    // NOTE: saved below to use when have inventory working
    // pantry: {
    //   description: 'You find yourself in large pantry, dusty shelves hold a few pieces of broken crockery. There is a key here. The door back to the kitchen is to the WEST.',
    //   west: 'kitchen'
    // },
    cellar: {
      description: 'You are in a small room, to the WEST is a door. It is locked.',
      east: 'kitchen',
      west: 'stairs'
    },
    stairs: {
      description: 'A staircase leads down into pitch black. Despite feeling afraid you descend. You have been eaten by a grue. THE END.'
    }
  };

  return service;
}
