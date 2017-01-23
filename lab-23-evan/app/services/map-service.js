'use strict';

const angular = require('angular');
const treasureQuest = angular.module('treasureQuest');

treasureQuest.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    // Locations ----------
    Jungle_1: {
      name: 'Jungle',
      desc: 'Walking through the jungle',
      message: 'Wow, this a thick jungle, this will be hard walking',
      east: 'Jungle_2',
      west: 'Sandy_Beach'
    },
    Jungle_2: {
      name: 'Jungle',
      desc: 'Walking through the jungle',
      message: "Man, this jungle is so thick, I can barely see where I'm going",
      south: 'Jungle_4',
      west: 'Jungle_1'
    },
    Jungle_3: {
      name: 'Jungle',
      desc: 'Walking through the jungle',
      message: "I'm burning a lot of calories, I hope I can find food!",
      east: 'Coconut_Tree_1'
    },
    Jungle_4: {
      name: 'Jungle',
      desc: 'Walking through the jungle',
      message: "This is so tiring, I'm so thirsty",
      north: 'Jungle_2',
      south: 'Old_Coin',
      east: 'Snake_Pit'
    },
    Jungle_5: {
      name: 'Jungle',
      desc: 'Walking through the jungle',
      message: "I'm burning a lot of calories, I hope I can find food!",
      north: 'Coconut_Tree_1',
      south: 'Bananna_Tree',
      east: 'Plane_Crash'
    },
    Jungle_6: {
      name: 'Jungle',
      desc: 'Walking through the jungle',
      message: 'This jungle is so thick, I hope there is nothing hiding that could hurt me',
      north: 'Snake_Pit',
      south: 'Booby_Trap_Swinging_Boulder',
      east: 'Jungle_7',
      west: 'Old_Coin'
    },
    Jungle_7: {
      name: 'Jungle',
      desc: 'Walking through the jungle',
      message: 'This is wearing me out, I hope I find some fresh water',
      south: 'Lookout_Point',
      east: 'Bananna_Tree',
      west: 'Jungle_6'
    },
    Jungle_8: {
      name: 'Jungle',
      desc: 'Walking through the jungle',
      message: "I'm getting so tired from hacking through this jungle!",
      north: 'Old_Coin',
      south: 'Jungle_9',
      east: 'Booby_Trap_Swinging_Boulder',
      west: 'Cave'
    },
    Jungle_9: {
      name: 'Jungle',
      desc: 'Walking through the jungle',
      message: 'This jungle is so thick!',
      north: 'Jungle_8',
      south: 'Cannibals'
    },
    Sandy_Beach: {
      name: 'Sandy Beach',
      desc: 'You have arrived on a beautiful sandy beach, explore the island to find the treasure!',
      message: "Wow, this island is amazing, I can't wait to get started!",
      east: 'Jungle_1'
    },
    Rocky_Beach: {
      name: 'Rock Beach',
      desc: 'Arrived at a rocky beach',
      message: "Finally, I'm out of the jungle and back on the beach. Now, on to finding a way home",
      east: 'Escape_Boat',
      west: 'Coconut_Tree_2'
    },
    Shipwreck: {
      name: 'Shipwreck',
      desc: 'Found an old shipwreck',
      message: 'Wow, an old shipwreck! It looks old, I wonder if it was carrying the treasure?',
      south: 'Climbing_Rope'
    },
    Plane_Crash: {
      name: 'Plane Crash',
      desc: 'Arrived at an old plane crash',
      message: "This plane looks like it's been here for a long time, I don't thing I can make use of any of this",
      west: 'Jungle_5'
    },
    Cave: {
      name: 'Cave',
      desc: 'Walked into a dark cave',
      message: "I'm already regretting walking in here",
      east: 'Jungle_8',
      west: 'Skeleton'
    },
    Lookout_Point: {
      name: 'Lookout Point',
      desc: 'Reached the lookout point',
      message: 'This is great, I can see the whole island from up here!',
      north: 'Jungle_7',
      south: 'Natural_Spring',
      east: 'Cliff',
      west: 'Booby_Trap_Swinging_Boulder'
    },
    Cliff: {
      name: 'Cliff',
      desc: 'You fell off a cliff!',
      message: 'Arrghh...ahahhhh..noooooooo!!! arrhhhggghh!!!',
      north: 'Bananna_Tree',
      south: 'Clue',
      east: 'Treasure',
      west: 'Lookout_Point'
    },
    Quicksand: {
      name: 'Quicksand',
      desc: 'You fell in a hidden patch of quicksand',
      message: 'Oh no! This stuff is pulling me down quick!',
      north: 'Clue',
      south: 'Coconut_Tree_2'
    },
    Snake_Pit: {
      name: 'Snake Pit',
      desc: 'You fell in a pit full of snakes!',
      message: 'No! No! Get me out of here!',
      south: 'Jungle_6',
      west: 'Jungle_4'
    },
    Booby_Trap_Swinging_Boulder: {
      name: 'Booby Trap Swinging Boulder',
      desc: 'An old swinging boulder booby trap',
      message: 'You just got killed by the booby trap',
      north: 'Jungle_6',
      east: 'Lookout_Point',
      west: 'Jungle_8'
    },
    Booby_Trap_Spike_Pit: {
      name: 'Booby Trap Spike Pit',
      desc: 'An old spike pit booby trap',
      message: 'You just got killed by the booby trap',
      north: 'Treasure',
      west: 'Clue'
    },
    // Enemies --------------
    Cannibals: {
      name: 'Cannibals',
      desc: 'Hungry hoard of cannibals hunted you down!',
      message: 'Oh no, please let me go!!!',
      north: 'Jungle_9',
      south: 'Riddle'
    },
    Wild_Boar: {
      name: 'Wild Boar',
      desc: 'Big wild boar with sharp tusks',
      message: 'You were mauled by the wild boar!',
      east: 'Coconut_Tree_2'
    },

    // Food And Water And Locations With Food And Water ------------
    Natural_Spring: {
      name: 'Natural Spring',
      desc: 'Found a natural spring with plenty of fresh water',
      message: "I'm so thirsy, I could drink it all!",
      north: 'Lookout_Point',
      east: 'Clue'
    },
    Bananna_Tree: {
      name: 'Bananna Tree',
      desc: 'Found a bananna tree with plenty of ripe fruit!',
      message: "I'm starving, these look so good!",
      north: 'Jungle_5',
      south: 'Cliff',
      west: 'Jungle_7'
    },
    Coconut_Tree_1: {
      name: 'Coconut Tree',
      desc: 'Found a coconut tree with cocunuts',
      message: 'This is great, both food and water!',
      south: 'Jungle_5',
      west: 'Jungle_3'
    },
    Coconut_Tree_2: {
      name: 'Coconut Tree',
      desc: 'Found a coconut tree with cocunuts',
      message: 'This is great, both food and water!',
      north: 'Quicksand',
      east: 'Rocky_Beach',
      west: 'Wild_Boar'
    },
    Lagoon: {
      name: 'Lagoon',
      desc: 'You arrived at a hidden lagoon',
      message: 'This looks like a nice spot. Hmmm, it really looks to me like people have been here before.',
      east: 'Riddle',
      west: 'Climbing_Rope'
    },
    // Items And Tools --------
    Old_Coin: {
      name: 'Old Coin',
      desc: 'You found an old gold coin',
      message: 'This looks really old, I bet this is part of the lost treasure!',
      north: 'Jungle_4',
      south: 'Jungle_8',
      east: 'Jungle_6'
    },
    Riddle: {
      name: 'Riddle',
      desc: 'You found a riddle',
      message: 'At first, this made no sense, but after reading over it a few times, I think I need to go east.',
      north: 'Cannibals',
      west: 'Lagoon'
    },
    Clue: {
      name: 'Clue',
      desc: 'Found a clue',
      message: 'This area looks disturbed, but why?',
      north: 'Cliff',
      south: 'Quicksand',
      east: 'Booby_Trap_Spike_Pit',
      west: 'Natural_Spring'
    },
    Engraved_Tablet: {
      name: 'Engraved Tablet',
      desc: 'Found an old stone table with an engraving',
      message: "Tablet: This island never gives, it only takes away. Hmmm, that doesn't sound good",
      south: 'Skeleton'
    },
    Climbing_Rope: {
      name: 'Climbing Rope',
      desc: 'Found a heavy rope',
      message: 'This could come in handy, better hang on to this',
      north: 'Shipwreck',
      east: 'Lagoon'
    },
    Skeleton: {
      name: 'Skeletons',
      desc: 'Skeletons of some explorers who met their fate',
      message: "Wow, thes guys have been here a long time! I hope whatever happened to them does'n happen to me",
      north: 'Engraved_Tablet',
      east: 'Cave'
    },
    Treasure: {
      name: 'Treasure',
      desc: 'Found the treasure! A treasure that would put all other treasures to shame!',
      message: "I can't believe I found the treasure! How I going to get it all back!?",
      south: 'Booby_Trap_Spike_Pit',
      west: 'Cliff'
    },
    Escape_Boat: {
      name: 'Escape Boat',
      desc: 'Found an old row boat, with 1 good oar',
      message: "This boat should be good enough to get me out of here!",
      west: 'Rocky_Beach'
    }
  }
  return service;
};
