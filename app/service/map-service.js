'use strict';

const angular = require('angular');
const angularAdventure = angular.module('angularAdventure');

angularAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('adventure map service');

  let service = {};

  // TODO: BUILD OUT MAP LOCATIONS
  service.mapData = {
    start: {
      title: 'start of the game',
      description: 'Deep in space aboard the research ship Vasa. The \'west\' section of the ship has been evacuated while you go in to investiage a malfunction. Deep into the eerily quiet \'west\' section, you feel the craft shudder, and seconds later, the emergency system alerts you that the section has lost its main oxygen supply in an explosion. You grab an emergency oxygen tank and mask and prepare to head for the airlock that will allow you to escape to one of the other undamaged sections. Each move you make depletes your oxygen a little, so you\'ll have to conserve. You know that your tank won\'t give you enough oxygen to make it all the way, so you\'ll need to find another tank somewhere between here and the airlock...',
      north: 'hallway1',
    },
    hallway1: {
      title: 'hallway',
      description: 'a long, dimly lit hallway with narrow door to the west',
      north: 'junction1',
      west: 'storageRoom',
    },
    storageRoom: {
      title: 'storage room',
      description: 'a storage room, empty except for some robot spare parts. it\'s a dead end.',
      east: 'hallway1',
    },
    junction1: {
      title: 'junction',
      description: 'you\'ve reached the end of the dim hallway and you\'re at a junction. which way should you go?',
      east: 'crewQuarters',
      north: 'kitchen',
      south: 'hallway1',
    },
    kitchen: {
      title: 'kitchen',
      description: 'a pot of split pea soup still sits warm on the stove.',
      south: 'hallway1',
    },
    crewQuarters: {
      title: 'crew quarters',
      description: 'smelly socks still lie next to unmade bunks. this room has many possible exits... which one to choose?',
      east: 'bathroom',
      north: 'staircase',
      south: 'exerciseRoom',
      west: 'junction1',
    },
    bathroom: {
      title: 'bathroom',
      description: 'unless you need to go, you\'d better turn around.',
      west: 'crewQuarters',
    },
    exerciseRoom: {
      title: 'exercise room',
      description: 'save the workout for when you have more oxygen.',
      north: 'crewQuarters',
    },
    staircase: {
      title: 'staircase',
      description: 'up the stairs, toward the fresh air.',
      east: 'junction2',
      south: 'crewQuarters',
    },
    junction2: {
      title: 'junction',
      description: 'at the top of the stairs, another junction.',
      east: 'recRoom',
      south: 'lab',
      west: 'staircase',
    },
    recRoom: {
      title: 'rec room',
      description: 'a little r&r would be nice right now, but there\'s no time for games.',
      west: 'junction2',
    },
    lab: {
      title: 'lab',
      description: 'a creepy place to be alone in.',
      east: 'library',
      north: 'junction2',
      west: 'medicalStation',
    },
    medicalStation: {
      title: 'medical station',
      description: 'you found another oxygen tank!',
      east: 'lab',
    },
    library: {
      title: 'library',
      description: 'don\'t stop to read, you still have to get out.',
      north: 'hallway2',
      west: 'lab',
    },
    hallway2: {
      title: 'hallway'
      description: 'another long, narrow hallway, with mysterious doors leading to who-knows-where.',
      east: 'alien',
      north: 'engineRoom',
      south: 'library',
      west: 'airlock',
    },
    engineRoom: {
      title: 'engine room',
      description: 'a noisy, not to mention radioactive place.',
      south: 'hallway2',
    }
    alien: {
      title: 'room containing an alien',
      description: 'a ferocious alien has been hiding in this room. you are eaten.'
    },
    airlock: {
      title: 'airlock',
      description: 'you made it to the airlock with enough oxygen to spare!'
    },
  };
  return service;
};
