'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('combatService', ['$log', 'mobService', 'playerService', combatService]);

function combatService($log, mobService, playerService) {
  $log.log('Combat service.');

  let service = {};

  service.combatLog = '';

  service.inCombat = false;
  service.round = 0;

  service.castSpell = function(spell, target){
    if (!service.inCombat) {
      if (!spell.outOfCombat) return playerService.player.feedback = 'You are not in combat.';
    }
    if (!playerService.player.spells[spell]) return playerService.player.feedback = 'You don\'t know that spell.';
    if (playerService.player.spells[spell].cost > playerService.player.mp) return playerService.player.feedback = 'You don\'t have enough MP.';

    service.combatLog += `${playerService.player.spells[spell].castDescription}\n`;

    if (spell.inCombat) {
      service.combatLog += `It deals ${playerService.player.mat} damage!\n`;
      target.hp -= playerService.player.mat;
      return;
    }
    service.combatLog += `It heals you for ${playerService.player.mat} HP.`;
    playerService.player.hp += playerService.player.mat;
    if (playerService.player.hp > playerService.player.mhp) playerService.player.hp = playerService.player.mhp;
    playerService.player.mp -= playerService.player.spells[spell].mp;
  };

  return service;
}
