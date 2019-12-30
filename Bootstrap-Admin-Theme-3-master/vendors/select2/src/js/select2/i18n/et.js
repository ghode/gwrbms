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
  // Estonian
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Sisesta ' + overChars + ' täht';

      if (overChars != 1) {
        message += 'e';
      }

      message += ' vähem';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Sisesta ' + remainingChars + ' täht';

      if (remainingChars != 1) {
        message += 'e';
      }

      message += ' rohkem';

      return message;
    },
    loadingMore: function () {
      return 'Laen tulemusi…';
    },
    maximumSelected: function (args) {
      var message = 'Saad vaid ' + args.maximum + ' tulemus';

      if (args.maximum == 1) {
        message += 'e';
      } else {
        message += 't';
      }

      message += ' valida';

      return message;
    },
    noResults: function () {
      return 'Tulemused puuduvad';
    },
    searching: function () {
      return 'Otsin…';
    }
  };
});
