'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Cowsay Controller', function() {

  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.cowsayAppCtrl = new $controller('CowsayAppController');
    });
  });

  describe('initial properties', () => {
    it('title property should equal Welcome to Cowville!', () => {
      expect(this.cowsayAppCtrl.title).toBe('Welcome to Cowville!');
    });
  });

  it('history property should be an empty array', () => {
    expect(Array.isArray(this.cowsayAppCtrl.history)).toBe(true);
  });

  it('list of cowfiles should show proper cowfiles', () => {
    cowsay.list((err, list) => {
      expect(this.cowsayAppCtrl.cowfiles).toEqual(list);
      expect(this.cowsayAppCtrl.current).toEqual(list[0]);
    });
  });

  describe('#update', () => {
    it('should return a cow that says testing', () => {
      let expected = cowsay.say({ text: 'testing', f: this.cowsayAppCtrl.current });
      let result = this.cowsayAppCtrl.update('testing');
      expect(result).toEqual(expected);
    });
  });

  describe('#speak', () => {
    it('should return a cow that says testing', () => {
      let expected = cowsay.say({ text: 'testing', f: this.cowsayAppCtrl.current });
      this.cowsayAppCtrl.speak('testing');
      expect(this.cowsayAppCtrl.spoken).toEqual(expected);
      expect(this.cowsayAppCtrl.history[0]).toEqual(expected);
    });
  });

  describe('#undo', () => {
    it('should undo a cow', () => {
      this.cowsayAppCtrl.speak('testing the undo');
      this.cowsayAppCtrl.undo();
      expect(this.cowsayAppCtrl.history.length).toEqual(0);
    });
  });

});
