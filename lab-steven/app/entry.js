'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('adventureGame', []);

require('./service/map-service.js');
require('./service/player-service.js');
