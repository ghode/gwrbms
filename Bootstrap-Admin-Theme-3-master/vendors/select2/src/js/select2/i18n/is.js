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

define(function () {
  // Icelandic
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Vinsamlegast styttið texta um ' + overChars + ' staf';

      if (overChars <= 1) {
        return message;
      }

      return message + 'i';
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Vinsamlegast skrifið ' + remainingChars + ' staf';

      if (remainingChars > 1) {
        message += 'i';
      }

      message += ' í viðbót';

      return message;
    },
    loadingMore: function () {
      return 'Sæki fleiri niðurstöður…';
    },
    maximumSelected: function (args) {
      return 'Þú getur aðeins valið ' + args.maximum + ' atriði';
    },
    noResults: function () {
      return 'Ekkert fannst';
    },
    searching: function () {
      return 'Leita…';
    }
  };
});
