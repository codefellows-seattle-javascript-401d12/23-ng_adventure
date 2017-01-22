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
      mobs: [mobService.rat]
    },
    mainStreet: {
      title: 'Main Street',
      desc: 'The cobblestone street ends abruptly at a sinkhole, wide enough to swallow up the entire pathway, that\'s now been filled with murky water, the path to the town center obstructed and unavailable. A run-down building stands off to the east, still in relatively good condition. Its roof is intact, and it even has a somewhat sturdy door guarding its entrance. At the far corner of the building, a door hangs open, signaling that it could be a potential route around the sinkhole.',
      exits: {
        north: {
          connection: 'intersection',
          locked: false
        },
        east: {
          connection: 'butcher',
          locked: true,
          unlockKey: itemService.gameItems.key
        }
      },
      items: [],
      mobs: [mobService.thug]
    },
    butcher: {
      title: 'Abandoned Butcher',
      desc: 'Rusted hooks hang at the end of even more rusted chains in seemingly random places around the inside of this building. Although it appears to offer a little respite from the downpour outside, the floors have been warped so badly that it\'s almost impossible to flatly plant your feet in any one place. The sturdy door to the west leads out into Main Street. At the southern end of the old butcher\'s shop, a door is on its last leg, about to collapse from what\'s left of its rusted hinge, leading out into an alleyway.',
      exits: {
        west: {
          connection: 'mainStreet',
          locked: true,
          unlockKey: itemService.gameItems.key
        },
        south: {
          connection: 'alley',
          locked: false
        }
      }
    },
    alley: {
      title: 'Alley',
      desc: 'Made up of a dirt path that has practically been turned into a marsh by the unrelenting rains of Tempest, this alleyway ends abruptly at a crumbling stone wall. Littered with holes, there\'s a pile of bricks haphazardly strewn about at the base of the wall. To the west, the muddy path connects into Main Street, offering a way around the sinkhole that\'s eaten up part of the street.',
      exits: {
        north: {
          connection: 'butcher',
          locked: false
        },
        west: {
          connection: 'townCenter',
          locked: false
        }
      }
    },
    townCenter: {
      title: 'Town Square',
      desc: '',
      exits: {
        east: {
          connection: 'alley',
          locked: false
        }
      }
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
