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

module('Results - highlighting results');

test('results:all with no data skips results:focus', function (assert) {
  assert.expect(0);

  var $ = require('jquery');

  var $select = $('<select></select>');
  var $parent = $('<div></div>');

  var $container = $('<span></span>');
  var container = new MockContainer();

  $parent.appendTo($('#qunit-fixture'));
  $select.appendTo($parent);

  var Utils = require('select2/utils');
  var Options = require('select2/options');

  var Results = require('select2/results');

  var results = new Results($select, new Options({}));

  // Fake the data adapter for the `setClasses` method
  results.data = {};
  results.data.current = function (callback) {
    callback([{ id: 'test' }]);
  };

  results.render();

  results.bind(container, $container);

  results.on('results:focus', function (params) {
    assert.ok(false, 'The results:focus event was triggered');
  });

  container.trigger('results:all', {
    data: {
      results: []
    }
  });
});

test('results:all triggers results:focus on the first item', function (assert) {
  assert.expect(2);

  var $ = require('jquery');

  var $select = $('<select></select>');
  var $parent = $('<div></div>');

  var $container = $('<span></span>');
  var container = new MockContainer();

  $parent.appendTo($('#qunit-fixture'));
  $select.appendTo($parent);

  var Utils = require('select2/utils');
  var Options = require('select2/options');

  var Results = require('select2/results');

  var results = new Results($select, new Options({}));

  // Fake the data adapter for the `setClasses` method
  results.data = {};
  results.data.current = function (callback) {
    callback([{ id: 'test' }]);
  };

  results.render();

  results.bind(container, $container);

  results.on('results:focus', function (params) {
    assert.equal(params.data.id, 'test');
    assert.equal(params.data.text, 'Test');
  });

  container.trigger('results:all', {
    data: {
      results: [
        {
          id: 'test',
          text: 'Test'
        }
      ]
    }
  });
});

test('results:append does not trigger results:focus', function (assert) {
  assert.expect(0);

  var $ = require('jquery');

  var $select = $('<select></select>');
  var $parent = $('<div></div>');

  var $container = $('<span></span>');
  var container = new MockContainer();

  $parent.appendTo($('#qunit-fixture'));
  $select.appendTo($parent);

  var Utils = require('select2/utils');
  var Options = require('select2/options');

  var Results = require('select2/results');

  var results = new Results($select, new Options({}));

  // Fake the data adapter for the `setClasses` method
  results.data = {};
  results.data.current = function (callback) {
    callback([{ id: 'test' }]);
  };

  results.render();

  results.bind(container, $container);

  results.on('results:focus', function () {
    assert.ok(false, 'The results:focus event was triggered');
  });

  container.trigger('results:append', {
    data: {
      results: [
        {
          id: 'test',
          text: 'Test'
        }
      ]
    }
  });
});