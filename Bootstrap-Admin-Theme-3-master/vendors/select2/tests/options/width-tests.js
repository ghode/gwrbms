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

module('Options - Width');

var $ = require('jquery');

var Select2 = require('select2/core');
var select = new Select2($('<select></select>'));

test('string passed as width', function (assert) {
  var $test = $('<select></select>');

  var width = select._resolveWidth($test, '80%');

  assert.equal(width, '80%');
});

test('width from style attribute', function (assert) {
  var $test = $('<select style="width: 50%;"></selct>');

  var width = select._resolveWidth($test, 'style');

  assert.equal(width, '50%');
});

test('width from style returns null if nothing is found', function (assert) {
  var $test = $('<select></selct>');

  var width = select._resolveWidth($test, 'style');

  assert.equal(width, null);
});

test('width from computed element width', function (assert) {
  var $style = $(
    '<style type="text/css">.css-set-width { width: 500px; }</style>'
  );
  var $test = $('<select class="css-set-width"></select>');

  $('#qunit-fixture').append($style);
  $('#qunit-fixture').append($test);

  var width = select._resolveWidth($test, 'element');

  assert.equal(width, '500px');
});

test('resolve gets the style if it is there', function (assert) {
  var $test = $('<select style="width: 20%;"></selct>');

  var width = select._resolveWidth($test, 'resolve');

  assert.equal(width, '20%');
});

test('resolve falls back to element if there is no style', function (assert) {
  var $style = $(
    '<style type="text/css">.css-set-width { width: 500px; }</style>'
  );
  var $test = $('<select class="css-set-width"></select>');

  $('#qunit-fixture').append($style);
  $('#qunit-fixture').append($test);

  var width = select._resolveWidth($test, 'resolve');

  assert.equal(width, '500px');
});
