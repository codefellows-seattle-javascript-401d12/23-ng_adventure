'use strict';

const angular = require('angular');
const adventureGame = angular.module('adventureGame');

adventureGame.factory('combatService', ['$log', 'mapService', 'mobService', 'playerService', combatService]);

function combatService($log, mapService, mobService, playerService) {
  $log.debug('Combat service.');

  let service = {};

  service.inCombat = false;
  service.round = 0;
  service.currentlyFighting = '';

  service.startCombat = function(target) {
    service.round = 0;
    service.combatLog = [];
    let mobArray = mapService.mapData[playerService.player.location].mobs;
    let foundMob = mobArray.filter(mob => mob.keywords.indexOf(target) !== -1)[0];
    if (!foundMob) return playerService.player.feedback = 'I don\'t see that here.';

    playerService.player.feedback = `You engage in combat with ${foundMob.shortDesc}!`;
    service.inCombat = true;
    service.currentlyFighting = foundMob;
  };

  service.enemyAttack = function() {
    if (!service.currentlyFighting) return;
    let mob = service.currentlyFighting;
    let damage = mob.atk;
    playerService.player.states.forEach(state => {
      if (playerService.player.spells[state].damageReduction) damage -= playerService.player.spells[state].damageReduction;
      playerService.player.spells[state].remaining--;
      if (playerService.player.spells[state].remaining === 0) {
        playerService.player.states.splice(state, 1);
        service.combatLog.push(`${state[0].toUpperCase()}${state.slice(1)} has worn off.`);
      }
    });
    service.combatLog.push(`${mob.attack} It deals ${damage} damage!`);
    playerService.player.hp -= damage;
    if (playerService.player.hp <= 0) {
      service.combatLog.push('YOU HAVE BEEN SLAIN!');
      service.inCombat = false;
      service.currentlyFighting = '';
      return playerService.player.feedback = 'You are dead.';
    }
    service.round++;
  };

  service.combatEnd = function(target) {
    service.combatLog.push(`You've slain ${target.shortDesc}!`);
    service.inCombat = false;
    playerService.player.states = [];
    target.inventory.forEach(item => {
      service.combatLog.push(`${target.shortDesc[0].toUpperCase()}${target.shortDesc.slice(1)} dropped ${item.shortDesc}.`);
      mapService.mapData[playerService.player.location].items.push(item);
    });
    mapService.mapData[playerService.player.location].mobs.splice(
      mapService.mapData[playerService.player.location].mobs.indexOf(
        mapService.mapData[playerService.player.location].mobs.find(element => element.shortDesc === service.currentlyFighting.shortDesc)
      ), 1);
    service.currentlyFighting = '';
  };

  service.attack = function() {
    playerService.player.feedback = '';
    let target = service.currentlyFighting;
    if (!service.inCombat) return playerService.player.feedback = 'You are not in combat.';
    service.combatLog.push(`You attack ${target.shortDesc} wildly! You deal ${playerService.player.atk} damage!`);
    target.hp -= playerService.player.atk;
    if (target.hp <= 0) {
      service.combatEnd(target);
    }
  };

  service.castSpell = function(commandArgs) {
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
      if (playerService.player.spells[spell].damage) {
        logMessage += `It deals ${playerService.player.mat} damage!`;
        service.combatLog.push(logMessage);
        target.hp -= playerService.player.mat;
        if (target.hp <= 0) {
          service.combatEnd(target);
        }
        return;
      }
      if (playerService.player.states.indexOf(playerService.player.spells[spell].addState) === -1) {
        service.combatLog.push(logMessage);
        playerService.player.states.push(playerService.player.spells[spell].addState);
        return;
      }
      service.combatLog.push(`You refresh the duration on ${playerService.player.spells[spell].addState}.`);
      playerService.player.spells[spell].remaining = playerService.player.spells[spell].duration;
      return;
    }
    logMessage += `It heals you for ${playerService.player.mat} HP.`;
    playerService.player.hp += playerService.player.mat;
    if (playerService.player.hp > playerService.player.mhp) playerService.player.hp = playerService.player.mhp;
    if (service.inCombat) return service.combatLog.push(logMessage);
    return playerService.player.feedback = `It heals you for ${playerService.player.mat} HP.`;
  };

  return service;
}
