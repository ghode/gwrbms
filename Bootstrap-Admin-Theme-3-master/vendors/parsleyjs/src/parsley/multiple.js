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

import $ from 'jquery';

var ParsleyMultiple = function () {
  this.__class__ = 'ParsleyFieldMultiple';
};

ParsleyMultiple.prototype = {
  // Add new `$element` sibling for multiple field
  addElement: function ($element) {
    this.$elements.push($element);

    return this;
  },

  // See `ParsleyField.refreshConstraints()`
  refreshConstraints: function () {
    var fieldConstraints;

    this.constraints = [];

    // Select multiple special treatment
    if (this.$element.is('select')) {
      this.actualizeOptions()._bindConstraints();

      return this;
    }

    // Gather all constraints for each input in the multiple group
    for (var i = 0; i < this.$elements.length; i++) {

      // Check if element have not been dynamically removed since last binding
      if (!$('html').has(this.$elements[i]).length) {
        this.$elements.splice(i, 1);
        continue;
      }

      fieldConstraints = this.$elements[i].data('ParsleyFieldMultiple').refreshConstraints().constraints;

      for (var j = 0; j < fieldConstraints.length; j++)
        this.addConstraint(fieldConstraints[j].name, fieldConstraints[j].requirements, fieldConstraints[j].priority, fieldConstraints[j].isDomConstraint);
    }

    return this;
  },

  // See `ParsleyField.getValue()`
  getValue: function () {
    // Value could be overriden in DOM
    if ('function' === typeof this.options.value)
      return this.options.value(this);
    else if ('undefined' !== typeof this.options.value)
      return this.options.value;

    // Radio input case
    if (this.$element.is('input[type=radio]'))
      return this._findRelated().filter(':checked').val() || '';

    // checkbox input case
    if (this.$element.is('input[type=checkbox]')) {
      var values = [];

      this._findRelated().filter(':checked').each(function () {
        values.push($(this).val());
      });

      return values;
    }

    // Select multiple case
    if (this.$element.is('select') && null === this.$element.val())
      return [];

    // Default case that should never happen
    return this.$element.val();
  },

  _init: function () {
    this.$elements = [this.$element];

    return this;
  }
};

export default ParsleyMultiple;
