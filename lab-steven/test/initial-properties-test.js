'use strict';

require('./lib/test-helper.js');

const angular = require('angular');

describe('Game Window Controller', function() {
  beforeEach(() => {
    angular.mock.module('adventureGame');
    angular.mock.inject($controller => this.gameWindowCtrl = new $controller('GameWindowController'));
  });

  describe('Initial properties', () => {
    it('inCombat should be false', () => {
      expect(this.gameWindowCtrl.combat.inCombat).toEqual(false);
    });

    it('currentlyFighting should be an empty string', () => {
      expect(this.gameWindowCtrl.combat.currentlyFighting).toEqual('');
    });

    it('mapData.intro should have no items or mobs', () => {
      expect(this.gameWindowCtrl.mapData.intro.items.length).toEqual(0);
      expect(this.gameWindowCtrl.mapData.intro.mobs.length).toEqual(0);
    });

    it('player.hp should be 20', () => {
      expect(this.gameWindowCtrl.player.hp).toEqual(20);
    });

    it('player.feedback should be an empty string', () => {
      expect(this.gameWindowCtrl.player.feedback).toEqual('');
    });

    it('player.inventory should be an empty array', () => {
      expect(Array.isArray(this.gameWindowCtrl.player.inventory)).toBe(true);
      expect(this.gameWindowCtrl.player.inventory.length).toEqual(0);
    });

    it('gameItems.key.shortDesc should be a simple key', () => {
      expect(this.gameWindowCtrl.gameItems.key.shortDesc).toEqual('a simple key');
    });
  });
});
