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
  // Serbian Cyrilic
  function ending (count, one, some, many) {
    if (count % 10 == 1 && count % 100 != 11) {
      return one;
    }

    if (count % 10 >= 2 && count % 10 <= 4 &&
      (count % 100 < 12 || count % 100 > 14)) {
        return some;
    }

    return many;
  }

  return {
    errorLoading: function () {
      return 'Преузимање није успело.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Обришите ' + overChars + ' симбол';

      message += ending(overChars, '', 'а', 'а');

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Укуцајте бар још ' + remainingChars + ' симбол';

      message += ending(remainingChars, '', 'а', 'а');

      return message;
    },
    loadingMore: function () {
      return 'Преузимање још резултата…';
    },
    maximumSelected: function (args) {
      var message = 'Можете изабрати само ' + args.maximum + ' ставк';

      message += ending(args.maximum, 'у', 'е', 'и');

      return message;
    },
    noResults: function () {
      return 'Ништа није пронађено';
    },
    searching: function () {
      return 'Претрага…';
    }
  };
});
