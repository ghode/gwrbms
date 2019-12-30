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
import ParsleyValidator from '../validator';


var ConstraintFactory = function (parsleyField, name, requirements, priority, isDomConstraint) {
  if (!/ParsleyField/.test(parsleyField.__class__))
    throw new Error('ParsleyField or ParsleyFieldMultiple instance expected');

  var validatorSpec = window.Parsley._validatorRegistry.validators[name];
  var validator = new ParsleyValidator(validatorSpec);

  $.extend(this, {
    validator: validator,
    name: name,
    requirements: requirements,
    priority: priority || parsleyField.options[name + 'Priority'] || validator.priority,
    isDomConstraint: true === isDomConstraint
  });
  this._parseRequirements(parsleyField.options);
};

var capitalize = function(str) {
  var cap = str[0].toUpperCase();
  return cap + str.slice(1);
};

ConstraintFactory.prototype = {
  validate: function(value, instance) {
    return this.validator.validate(value, ...this.requirementList, instance);
  },

  _parseRequirements: function(options) {
    this.requirementList = this.validator.parseRequirements(this.requirements, key => {
      return options[this.name + capitalize(key)];
    });
  }
};

export default ConstraintFactory;

