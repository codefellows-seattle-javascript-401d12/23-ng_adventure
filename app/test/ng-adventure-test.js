'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

// controller defaults:
// player start location - porch
// player history current message - welcome, porch
// player current pointed direction - north
// player inventory - empty string

// controller methods:
// move player from porch, expect entryway
// move player south from porch, expect 'no room that way' message
// +1 in player history length after move player
// expect inventory to be 'key' after enter pantry



// example from docs
describe('component: heroDetail', function() {
  var $componentController;

  beforeEach(module('heroApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should expose a `hero` object', function() {
    // Here we are passing actual bindings to the component
    var bindings = {hero: {name: 'Wolverine'}};
    var ctrl = $componentController('heroDetail', null, bindings);

    expect(ctrl.hero).toBeDefined();
    expect(ctrl.hero.name).toBe('Wolverine');
  });

  it('should call the `onDelete` binding, when deleting the hero', function() {
    var onDeleteSpy = jasmine.createSpy('onDelete');
    var bindings = {hero: {}, onDelete: onDeleteSpy};
    var ctrl = $componentController('heroDetail', null, bindings);

    ctrl.delete();
    expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
  });

  it('should call the `onUpdate` binding, when updating a property', function() {
    var onUpdateSpy = jasmine.createSpy('onUpdate');
    var bindings = {hero: {}, onUpdate: onUpdateSpy};
    var ctrl = $componentController('heroDetail', null, bindings);

    ctrl.update('foo', 'bar');
    expect(onUpdateSpy).toHaveBeenCalledWith({
      hero: ctrl.hero,
      prop: 'foo',
      value: 'bar'
    });
  });

});

// example from stack overflow
// var $componentController;
// beforeEach(inject(function($rootScope, _$componentController_){
//     scope = $rootScope.$new();
//     $componentController = _$componentController_;
//     controller = $componentController('mainViewer',
//                                      {$scope:scope},
//                                      {name: 'Main Component!'} );
// }));


// all below are tests for previous lab
// kept here for example
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
