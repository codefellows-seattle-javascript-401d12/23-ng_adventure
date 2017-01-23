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
    knowledge: [],
    message: ''
  };

  let history = service.history = [
    {
      turn,
      name: 'Sandy Beach',
      desc: 'welcome to Treasure Quest',
      message: "I can't wait to find the treasure!",
      location: 'Sandy Beach',
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
      let message = mapService.mapData[newLocation].message
      player.message = message;
      player.location = current;

      if(!newLocation) {
        history.unshift({
          turn,
          name: mapService.mapData[current].name,
          desc: 'Edge of the island',
          message: message,
          location: current,
          hp: player.hp,
          items: player.items,
          knowledge: player.knowledge,
        });
        return reject('Just water out there!');
      };

      player.location = newLocation;
      message = mapService.mapData[newLocation].message

      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
        message: mapService.mapData[player.location].message,
        hp: player.hp,
        items: player.items,
        knowledge: player.knowledge,
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
    function playerDead() {
      if(player.hp < 0) {
        player.hp = 0;
        winOrDie();
      }
      return;
    }
    if(player.location === 'Natural_Spring' || player.location === 'Bananna_Tree') {
      player.hp+=5;
      playerDead();
    }
    if(player.location === 'Coconut_Tree_1' || player.location === 'Coconut_Tree_2') {
      player.hp+=8;
      playerDead();
    }
    if(player.location === 'Quicksand') {
      if(player.items.includes('Climbing_Rope')) {
        player.hp = player.hp;
        player.message = 'Thankfully you found that rope so you could repel down the cliff.';
        playerDead();
      }
      player.hp-=10;
      playerDead();
    }
    if(player.location === 'Wild_Boar') {
      player.hp-=5;
      playerDead();
    }
    if(player.location === 'Cliff') {
      if(player.items.includes('Climbing_Rope')) {
        player.hp = player.hp;
      }
      player.hp-=15;
      playerDead();
    }
    if(player.location === 'Booby_Trap_Swinging_Boulder' || player.location === 'Booby_Trap_Spike_Pit') {
      if(player.knowledge.includes('Clue')) {
        player.hp = player.hp;
        player.message = 'Finding clues led to you spotting the booby trap before it took you out!';
      }
      player.hp-=12;
      playerDead();
    }
    if(player.location === 'Cannibals') {
      if(player.items.includes('Old_Coin')) {
        player.items.pop();
        player.hp = player.hp;
        player.message = 'For some reason the cannibals thought the old coin had some special powers and accepted it as a trade for your life!';
        return;
      }
      player.hp = 0;
      player.message = "Sorry, you were eaten by cannibals";
    }
    player.hp-=1;
    playerDead();
    winOrDie();
  };

  // Win or Die --------------------------
  service.winOrDie = function() {
    if(player.location === 'Escape_Boat') {
      if(player.items.includes('Treasure')) {
        if(player.hp > 0) {
          player.message = "Congratulations, You've successfully collected the treasure and escaped the island!";
          alert("Congratulations, You've successfully collected the treasure and escaped the island!");
          return;
        }
        player.message = "Sorry, you were close but you died trying to escape with the treasure!";
        return;
      }
      player.message = "You can't leave without the treasure!";
      return;
    }
    if(player.hp < 1) {
      player.hp = 0;
      player.history = [];
      player.message = "Sorry, you died trying to find the treasure!";
      return;
    }
  }
  return service;
};
