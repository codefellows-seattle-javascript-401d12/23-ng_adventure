'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('ngMarsMission', []);

require('./service/mapping-service.js');
require('./service/player-service.js');
require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/game-history/game-history.js');
