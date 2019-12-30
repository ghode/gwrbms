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

import Parsley from './main';

$.extend(true, Parsley, {
  asyncValidators: {
    'default': {
      fn: function (xhr) {
        // By default, only status 2xx are deemed successful.
        // Note: we use status instead of state() because responses with status 200
        // but invalid messages (e.g. an empty body for content type set to JSON) will
        // result in state() === 'rejected'.
        return xhr.status >= 200 && xhr.status < 300;
      },
      url: false
    },
    reverse: {
      fn: function (xhr) {
        // If reverse option is set, a failing ajax request is considered successful
        return xhr.status < 200 || xhr.status >= 300;
      },
      url: false
    }
  },

  addAsyncValidator: function (name, fn, url, options) {
    Parsley.asyncValidators[name] = {
      fn: fn,
      url: url || false,
      options: options || {}
    };

    return this;
  }

});

Parsley.addValidator('remote', {
  requirementType: {
    '': 'string',
    'validator': 'string',
    'reverse': 'boolean',
    'options': 'object'
  },

  validateString: function (value, url, options, instance) {
    var data = {};
    var ajaxOptions;
    var csr;
    var validator = options.validator || (true === options.reverse ? 'reverse' : 'default');

    if ('undefined' === typeof Parsley.asyncValidators[validator])
      throw new Error('Calling an undefined async validator: `' + validator + '`');

    url = Parsley.asyncValidators[validator].url || url;

    // Fill current value
    if (url.indexOf('{value}') > -1) {
      url = url.replace('{value}', encodeURIComponent(value));
    } else {
      data[instance.$element.attr('name') || instance.$element.attr('id')] = value;
    }

    // Merge options passed in from the function with the ones in the attribute
    var remoteOptions = $.extend(true, options.options || {} , Parsley.asyncValidators[validator].options);

    // All `$.ajax(options)` could be overridden or extended directly from DOM in `data-parsley-remote-options`
    ajaxOptions = $.extend(true, {}, {
      url: url,
      data: data,
      type: 'GET'
    }, remoteOptions);

    // Generate store key based on ajax options
    instance.trigger('field:ajaxoptions', instance, ajaxOptions);

    csr = $.param(ajaxOptions);

    // Initialise querry cache
    if ('undefined' === typeof Parsley._remoteCache)
      Parsley._remoteCache = {};

    // Try to retrieve stored xhr
    var xhr = Parsley._remoteCache[csr] = Parsley._remoteCache[csr] || $.ajax(ajaxOptions);

    var handleXhr = function () {
      var result = Parsley.asyncValidators[validator].fn.call(instance, xhr, url, options);
      if (!result) // Map falsy results to rejected promise
        result = $.Deferred().reject();
      return $.when(result);
    };

    return xhr.then(handleXhr, handleXhr);
  },

  priority: -1
});

Parsley.on('form:submit', function () {
  Parsley._remoteCache = {};
});

window.ParsleyExtend.addAsyncValidator = function () {
  ParsleyUtils.warnOnce('Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`');
  return Parsley.addAsyncValidator(...arguments);
};
