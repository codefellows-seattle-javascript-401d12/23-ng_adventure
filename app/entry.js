'use strict';

const angular = require('angular');

angular.module('ngAdventure', []);

require('./scss/main.scss');

require('./service/map-service.js');
require('./service/player-service.js');

require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/game-history/game-history.js');
