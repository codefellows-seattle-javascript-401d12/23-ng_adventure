'use strict';

require('./scss/style.scss');

const angular = require('angular');

angular.module('ngEscape', []);

require('./service/map-service.js');
require('./service/player-service.js');

require('./component/game-nav/game-nav.js');
require('./component/location/location.js');
require('./component/island-image/island.js');
require('./component/player-stats/player-stats.js');
