'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    beach: {
      desc: 'The beach is deserted, there is nothing around you and no signs of life. You spot in the distance a volcano. Your options are to try and swim to rescue or head towards the VOLCANO',
      image: '/app/images/beach.jpg',
      option1: 'ocean',
      option2: 'volcano'
    },
    volcano: {
      desc: 'You climb the volcano to see if you can find any signs of life and your quickly realize you are along on a deserted island. From the top of the volcano you spot a STREAM, a JUNGLE, and the BEACH you came from.',
      image: '/app/images/volcano.jpg',
      option1: 'stream',
      option2: 'jungle',
      option3: 'beach'
    },
    stream: {
      desc: 'The stream is barely a trickle but at least it\'s clean water. As you are exporing the area around the stream you come across a CAVE and a SWAMP. You also consider heading back to the VOLCANO',
      image: '/app/images/stream.jpg',
      option1: 'swamp',
      option2: 'cave',
      option3: 'volcano'
    },
    swamp: {
      desc: 'The swamp leads no where and you quickly find yourself covered in a thick layer of mud. Your only choice is to head back to the STREAM',
      image: '/app/images/swamp.jpg',
      option1: 'stream'
    },
    jungle: {
      desc: 'The jungle is filled with coconut trees and other plants that may help you get off the island. You explore the area and come across a CAVE, a STREAM, and a very old RAFT that you aren\'t sure is sea worthy or not. You also consider heading back to the VOLCANO',
      image: '/app/images/jungle.jpg',
      option1: 'volcano',
      option2: 'stream',
      option3: 'cave',
      option4: 'raft'
    },
    cave: {
      desc: 'The cave appears as though it once was used by someone. There are markings on the walls but they don\'t make any sense. The markings just say wilson, over and over. After leaving the cave you come across a STREAM and you also realize you are in a thick JUNGLE filled with coconut trees.',
      image: '/app/images/cave.jpg',
      option1: 'stream',
      option2: 'jungle'
    },
    raft: {
      desc: 'The raft is pretty beat up but it looks like you can salvage it. Using some of the materials from the JUNGLE you are able to repair the raft enough to at least make it stable enough to try and make an escape.',
      image: '/app/images/raft.jpg'
    },
    ocean: {
      desc: 'The ocean while warm is filled with dangerous animals and reefs. It\'s not safe to try and swim to safety. Your only option is to head back to the BEACH.',
      image: '/app/images/ocean.jpg',
      option1: 'beach'
    }
  };

  return service;
}
