'use strict';

const angular = require('angular');
require('./scss/main.scss');

angular.module('treasureQuest', []);

require('./services/player-service.js');
require('./services/map-service.js');
require('./components/game-pad/game-pad.js');
require('./components/player-info/player-info.js');
require('./components/game-history/game-history.js');
