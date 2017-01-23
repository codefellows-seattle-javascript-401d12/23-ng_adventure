'use strict';

const angular = require('angular');
const treasureQuest = angular.module('treasureQuest');

treasureQuest.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('playerService');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'Evan',
    location: 'Sandy_Beach',
    hp: 20,
    items: [],
    knowledge: []
  };

  let history = service.history = [
    {
      turn,
      desc: 'welcome to Treasure Quest',
      message: "I can't wait to find the treasure!",
      location: 'Sandy_Beach',
      hp: player.hp,
      items: player.items,
      knowledge: player.knowledge
    }
  ];

  // Move player --------------------------
  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction]

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'Edge of the island',
          message: "There's nothing out there, just water!",
          location: player.location,
          hp: player.hp,
          items: player.items,
          knowledge: player.knowledge
        });
        return reject('Just water out there!');
      };

      player.location = newLocation;

      history.unshift({
        turn,
        location: player.newLocation,
        desc: mapService.mapData[newLocation].desc,
        message: mapService.mapData[newLocation].message,
        hp: player.hp,
        items: player.items,
        knowledge: player.knowledge
      });

      return resolve(player.location);
    });
  };

  // Collect Items ---------------------------
  service.addItems = function() {
    if(player.location === 'Climbing_Rope' || player.location === 'Treasure') {
      player.items.shift(player.location);
    }
    if(player.location === 'Old_Coin') {
      player.items.push(player.location);
    }
  };

  // Gain knowledge ---------------------------
  service.addKnowledge = function() {
    if(player.location === 'Engraved_Tablet' || player.location === 'Clue' || player.location === 'Riddle') {
      player.knowledge.push(player.location);
    }
  };

  // Calculate HP ------------------------------
  service.calculateHP = function() {
    if(player.location === 'Natural_Spring' || player.location === 'Bananna_Tree') {
      player.hp+=5;
    }
    if(player.location === 'Coconut_Tree_1' || player.location === 'Coconut_Tree_2') {
      player.hp+=8;
    }
    if(player.location === 'Quicksand') {
      if(player.items.includes('Climbing_Rope')) {
        player.hp = player.hp;
        player.message = 'Thankfully you found that rope so you could repel down the cliff.';
        return;
      }
      player.hp-=10;
    }
    if(player.location === 'Wild_Boar') {
      player.hp-=5;
      return;
    }
    if(player.location === 'Cliff') {
      if(player.items.includes('Climbing_Rope')) {
        player.hp = player.hp;
        return;
      }
      player.hp-=15;
    }
    if(player.location === 'Booby_Trap_Swinging_Boulder' || player.location === 'Booby_Trap_Spike_Pit') {
      if(player.knowledge.includes('Clue')) {
        player.hp = player.hp;
        player.message = 'Finding clues led to you spotting the booby trap before it took you out!';
        return;
      }
      player.hp-=12;
    }
    if(player.location === 'Cannibals') {
      if(player.items.includes('Old_Coin')) {
        player.items.pop('Old_Coin', 0);
        player.hp = player.hp;
        player.message = 'For some reason the cannibals thought the old coin had some special powers and accepted it as a trade for your life!';
        return;
      }
      player.hp = 0;
    }
    player.hp-=1;
  };

  // Win or Die --------------------------
  service.winOrDie = function() {
    if(player.location === 'Escape_Boat') {
      if(player.items.includes('Treasure')) {
        if(player.hp > 0) {
          player.message = "Congratulations, You've successfully collected the treasure and escaped the island!";
          return;
        }
        player.message = "Sorry, you were close but you died trying to escape with the treasure!";
        return;
      }
      player.message = "You can't leave without the treasure!";
      return;
    }
    if(player.hp > 1) {
      player.message = "Sorry, you died trying to find the treasure!";
      return;
    }
  }

  return service;
};
