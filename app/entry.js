'use strict';

const angular = require('angular');

angular.module('ngAdventure', []);

// styles
require('./scss/lib/main.scss');

// services
require('./service/map-service.js');
require('./service/select-box-service.js');
require('./service/player-service.js');

//components
require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/game-history/game-history.js');
