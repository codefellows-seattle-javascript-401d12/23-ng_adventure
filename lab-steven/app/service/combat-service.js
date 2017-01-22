'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('combatService', ['$log', 'mapService', 'mobService', 'playerService', combatService]);

function combatService($log, mapService, mobService, playerService) {
  $log.debug('Combat service.');

  let service = {};

  service.combatLog = [];

  service.inCombat = false;
  service.round = 0;
  service.currentlyFighting = '';

  service.startCombat = function(target) {
    let mobArray = mapService.mapData[playerService.player.location].mobs;
    let foundMob = mobArray.filter(mob => mob.keywords.indexOf(target) !== -1)[0];
    if (!foundMob) return playerService.player.feedback = 'I don\'t see that here.';

    playerService.player.feedback = `You engage in combat with ${foundMob.shortDesc}!`;
    service.inCombat = true;
    service.currentlyFighting = foundMob;
  };

  service.castSpell = function(commandArgs){
    let logMessage = '';
    playerService.player.feedback = '';
    let spell = commandArgs.split(' ')[0];
    let target = service.currentlyFighting;
    if (!service.inCombat) {
      if (playerService.player.spells[spell].inCombat) return playerService.player.feedback = 'You are not in combat.';
    }
    if (!playerService.player.spells[spell]) return playerService.player.feedback = 'You don\'t know that spell.';
    if (playerService.player.spells[spell].cost > playerService.player.mp) return playerService.player.feedback = 'You don\'t have enough MP.';

    logMessage += `${playerService.player.spells[spell].castDescription} `;

    playerService.player.mp -= playerService.player.spells[spell].cost;

    if (playerService.player.spells[spell].inCombat) {
      logMessage += `It deals ${playerService.player.mat} damage!`;
      service.combatLog.push(logMessage);
      target.hp -= playerService.player.mat;
      if (target.hp <= 0) {
        service.combatLog.push(`You've slain ${target.shortDesc}!`);
        service.currentlyFighting = '';
        mapService.mapData[playerService.player.location].mobs.splice(
          mapService.mapData[playerService.player.location].mobs.indexOf(
            mapService.mapData[playerService.player.location].mobs.find(element => element.shortDesc === service.currentlyFighting.shortDesc)
          ), 1);
      }
      return;
    }
    logMessage += `It heals you for ${playerService.player.mat} HP.`;
    playerService.player.hp += playerService.player.mat;
    if (playerService.player.hp > playerService.player.mhp) playerService.player.hp = playerService.player.mhp;
    if (service.inCombat) return service.combatLog.push(logMessage);
    playerService.player.feedback = `It heals you for ${playerService.player.mat} HP.`;
  };

  return service;
}
