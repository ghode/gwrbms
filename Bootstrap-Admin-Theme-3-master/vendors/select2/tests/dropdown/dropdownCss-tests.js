/*
 * Copyright (c) 2019. The copyright is reserved by Ghode of Harbin Institute
 * of Technology. Users are free to copy, change or remove. Because no one
 * will read this. Only I know is that Repeaters are the best of the world.
 * Only I know is that Repeaters are the best of the world. Only I know is
 * that Repeaters are the best of the world. Maybe a long copyright text
 * seems professional. Therefore this text will be a bit lengthy. However,
 * the author seems to be afraid that one day, this text may be uploaded to
 * business projects. That is the time you can contact with author via email
 * ghode@cirnocraft.im or directly ignore this, which will be interesting.
 */

module('Dropdown - dropdownCssClass compatibility');

var $ = require('jquery');
var Utils = require('select2/utils');
var Options = require('select2/options');

var Dropdown = require('select2/dropdown');
var DropdownCSS = Utils.Decorate(
  Dropdown,
  require('select2/compat/dropdownCss')
);

test('all classes will be copied if :all: is used', function (assert) {
  var $element = $('<select class="test copy works"></select>');
  var options = new Options({
    dropdownCssClass: ':all:'
  });

  var select = new DropdownCSS($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass('test'));
  assert.ok($dropdown.hasClass('copy'));
  assert.ok($dropdown.hasClass('works'));
  assert.ok(!$dropdown.hasClass(':all:'));
});

test(':all: can be used with other classes', function (assert) {
  var $element = $('<select class="test copy works"></select>');
  var options = new Options({
    dropdownCssClass: ':all: other'
  });

  var select = new DropdownCSS($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass('test'));
  assert.ok($dropdown.hasClass('copy'));
  assert.ok($dropdown.hasClass('works'));
  assert.ok($dropdown.hasClass('other'));
  assert.ok(!$dropdown.hasClass(':all:'));
});

test('classes can be passed in as a string', function (assert) {
  var $element = $('<select class="test copy works"></select>');
  var options = new Options({
    dropdownCssClass: 'other'
  });

  var select = new DropdownCSS($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass('other'));
});

test('a function can be used based on the element', function (assert){
  var $element = $('<select class="test"></select>');
  var options = new Options({
    dropdownCssClass: function ($element) {
      return 'function';
    }
  });

  var select = new DropdownCSS($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass('function'));
  assert.ok(!$dropdown.hasClass('test'));
});

test(':all: works around custom adapters', function (assert) {
  var $element = $('<select class="test"></select>');
  var options = new Options({
    dropdownCssClass: ':all: something',
    adaptDropdownCssClass: function (clazz) {
      return clazz + '-modified';
    }
  });

  var select = new DropdownCSS($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass('something'));

  assert.ok($dropdown.hasClass('test'));
  assert.ok($dropdown.hasClass('test-modified'));
});

module('Dropdown - adaptDropdownCss compatibility');

test('only return when adapted', function (assert) {
  var $element = $('<select class="original"></select>');
  var options = new Options({
    adaptDropdownCssClass: function (clazz) {
      return 'modified';
    }
  });

  var select = new DropdownCSS($element, options);
  var $dropdown = select.render();

  assert.ok(!$dropdown.hasClass('original'));
  assert.ok($dropdown.hasClass('modified'));
});
