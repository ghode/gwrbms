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

module('Dropdown - Stoping event propagation');

var Dropdown = require('select2/dropdown');
var StopPropagation = require('select2/dropdown/stopPropagation');

var $ = require('jquery');
var Options = require('select2/options');
var Utils = require('select2/utils');

var CustomDropdown = Utils.Decorate(Dropdown, StopPropagation);

var options = new Options();

test('click event does not propagate', function (assert) {
  assert.expect(1);

  var $container = $('#qunit-fixture .event-container');
  var container = new MockContainer();

  var dropdown = new CustomDropdown($('#qunit-fixture select'), options);

  var $dropdown = dropdown.render();
  dropdown.bind(container, $container);

  $container.append($dropdown);
  $container.on('click', function () {
    assert.ok(false, 'The click event should have been stopped');
  });

  $dropdown.trigger('click');

  assert.ok(true, 'Something went wrong if this failed');
});
