'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('mapService', ['$log', 'itemService', 'mobService', mapService]);

function mapService($log, itemService, mobService) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    intro: {
      title: 'Intro',
      desc: 'Enter your name. You won\'t be able to leave until you select a name.',
      exits: {},
      items: [],
      mobs: []
    },
    gates: {
      title: 'Gates of Tempest',
      desc: 'Large wooden doors create the maw that leads into the city of Tempest. They\'ve been battered and worn down by the constant storming rain, one seeming as if it\'s ready to surrender to the elements and fall from its hinges. A cobblestone street leads south into the city, occasional breaks in the stone leading to muddy puddles of drowning earth. In the distance, the silhouette of an imposing tower looms over the cityscape, obscured by the sheet of rain.',
      exits: {
        south: {
          connection: 'intersection',
          locked: false
        }
      },
      items: [],
      mobs: []
    },
    intersection: {
      title: 'Crossroads of Main Street and Drusalya',
      desc: 'Main street runs from the gates of Tempest to the North into the heart of the dreary city to the South. It\'s flanked on either side by a number of buildings that once were businesses or housing complexes for a litany of citizens. Now they\'re crumbling, dilapidated ghosts of their former glory. To the East is Drusalya Street, but the road has been washed out. Attempts at bridging the gap of water seem to have been long-forgotten.',
      exits: {
        north: {
          connection: 'gates',
          locked: false
        },
        south: {
          connection: 'mainStreet',
          locked: false
        }
      },
      items: [mobService.rat]
    },
    mainStreet: {
      title: 'Main Street',
      desc: '',
      exits: {
        west: {
          connection: 'room2',
          locked: false
        }
      },
      items: []
    }
  };

  service.unlockDoor = function(direction, currentRoom, playerInventory) {
    if (direction === 'n') direction = 'north';
    if (direction === 'e') direction = 'east';
    if (direction === 'w') direction = 'west';
    if (direction === 's') direction = 'south';

    if (service.mapData[currentRoom].exits[direction]) {
      if (service.mapData[currentRoom].exits[direction].locked) {
        if (playerInventory.find((invItem => service.mapData[currentRoom].exits[direction].unlockKey === invItem))) {
          service.mapData[currentRoom].exits[direction].locked = false;
          let connectedRoom = service.mapData[currentRoom].exits[direction].connection;
          Object.keys(service.mapData[connectedRoom].exits).forEach(eleDirection => {
            if (service.mapData[connectedRoom].exits[eleDirection].connection === currentRoom) {
              service.mapData[connectedRoom].exits[eleDirection].locked = false;
            }
          });
          return `You use ${service.mapData[currentRoom].exits[direction].unlockKey.shortDesc} to unlock the door to the ${direction}.`;
        }
        return 'You don\'t have the correct key to unlock that door.';
      }
      return 'That exit isn\'t locked.';
    }
    return `There doesn\'t appear to be an exit to the ${direction}.`;
  };

  return service;
}
