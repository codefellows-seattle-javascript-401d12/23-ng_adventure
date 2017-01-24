'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    city: {
      desc: 'Zombies have taken over your city! You are on your own and you must escape! Make sure that you stay on course or you might become the next zombie meal...',
      north: 'exit'
    },
    exit : {
      desc: 'You have made it out of the city, but this is only the beginning. You need to make it through the jungle and mountains to the next town where you have heard there are people along with protection, food and shelter.',
      north: 'jungle',
      south: 'city'
    },
    jungle : {
      desc: 'You have made it to the jungle! Keep going. Watch out for the zombie tigers and quicksand in this jungle.',
      east: 'trail',
      west: 'quicksand',
      south: 'exit'
    },
    quicksand : {
      desc: 'Oh no! You have fallen into the quicksand and cannot escape! Restart the game and try again.',
      north: 'You cannot escape the quicksand!',
      south: 'You cannot escape the quicksand!',
      east: 'You cannot escape the quicksand!',
      west: 'You cannot escape the quicksand!'
    },
    trail: {
      desc: 'So far you have stayed on course and are only a couple days away from the next town... But you are becoming very tired and hungry, which is impacting your better judgment and causing you to hallucinate. Fight it!',
      west: 'jungle',
      east: 'pass'
    },
    pass: {
      desc: 'You have made it to the mountain pass! You have been able to stave off your hunger with some berries you found in the jungle... Fortunately, they were not poisonous. You can only last so much longer though. You must keep going!',
      west: 'trail',
      east: 'tigers',
      south: 'descent'
    },
    tigers: {
      desc: 'Really? You could not just stay on course and avoid the zombie tigers lurking in the shadows? You have been eaten alive. Restart the game and try again.',
      north: 'You are dead.',
      south: 'You are dead.',
      east: 'You are dead.',
      west: 'You are dead.',
    },
    descent: {
      desc: 'You are now descending from the mountain pass! You can finally see the next town! Almost there!',
      north: 'pass',
      east: 'town'
    },
    town: {
      desc: 'Great job! You have survived and made it to the next town!',
      west: 'descent'
    }
  };
  return service;
}
