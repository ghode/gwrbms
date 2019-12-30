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
  // Bulgarian
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Моля въведете с ' + overChars + ' по-малко символ';

      if (overChars > 1) {
        message += 'a';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Моля въведете още ' + remainingChars + ' символ';

      if (remainingChars > 1) {
        message += 'a';
      }

      return message;
    },
    loadingMore: function () {
      return 'Зареждат се още…';
    },
    maximumSelected: function (args) {
      var message = 'Можете да направите до ' + args.maximum + ' ';

      if (args.maximum > 1) {
        message += 'избора';
      } else {
        message += 'избор';
      }

      return message;
    },
    noResults: function () {
      return 'Няма намерени съвпадения';
    },
    searching: function () {
      return 'Търсене…';
    }
  };
});
