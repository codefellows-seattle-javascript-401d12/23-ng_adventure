'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    FremontBrewing: {
      desc: 'I see you have started at Fremont Brewing for a post work beer, next stop should be dinner',
      east: 'Brouwers'
    },
    Brouwers: {
      desc: 'Welcome to Brouwers, great place to enjoy some food and an excellent beer. Do you head east towards a loud bar? Or do you head south to keep the atmosphere similar?',
      west: 'FremontBrewing',
      south: 'Woodskys',
      east: 'LTD'
    },
    LTD: {
      desc: 'You are now at LTD, do you keep the party going.... or wind it down? Head south to party on, head east to bail.',
      west: 'Brouwers',
      south: 'KangarooKiwi',
      east: 'ShelterLounge'
    },
    ShelterLounge: {
      desc: 'You might as well call it a night, because you are being lame. Go west to keep the party going',
      west: 'LTD'
    },
    Woodskys: {
      desc: 'You have made it to the ultimate snowboarder bar, watch some bangers, take a shot-ski, and move on',
      north: 'Brouwers',
      east: 'KangarooKiwi'
    },
    KangarooKiwi: {
      desc: 'It must be beach night, because there is sand everywhere. Grab a drink, and then head south',
      north: 'LTD',
      west: 'Woodskys',
      south: 'KingsHardware'
    },
    KingsHardware: {
      desc: 'Its packed in here, but you are seeing some farmilar faces. Grab a drink, grab a lady, and take her east to go dance',
      north: 'KangarooKiwi',
      east: 'BalMar'
    },
    BalMar: {
      desc: 'You have been X-ed out....Go home. GAME OVER',
      west: 'KingsHardware'
    }
  };

  return service;
}
