'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('adventureGame', []);

require('./service/mob-service.js');
require('./service/item-service.js');
require('./service/map-service.js');
require('./service/interpreter-service.js');
require('./service/player-service.js');
require('./service/combat-service.js');

require('./component/player-input/player-input.js');
require('./component/prompt/prompt.js');
require('./component/game-window/game-window.js');
