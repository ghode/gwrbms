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
  // Ukranian
  function ending (count, one, couple, more) {
    if (count % 100 > 10 && count % 100 < 15) {
      return more;
    }
    if (count % 10 === 1) {
      return one;
    }
    if (count % 10 > 1 && count % 10 < 5) {
      return couple;
    }
    return more;
  }

  return {
    errorLoading: function () {
      return 'Неможливо завантажити результати';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;
      return 'Будь ласка, видаліть ' + overChars + ' ' +
        ending(args.maximum, 'літеру', 'літери', 'літер');
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;
      return 'Будь ласка, введіть ' + remainingChars + ' або більше літер';
    },
    loadingMore: function () {
      return 'Завантаження інших результатів…';
    },
    maximumSelected: function (args) {
      return 'Ви можете вибрати лише ' + args.maximum + ' ' +
        ending(args.maximum, 'пункт', 'пункти', 'пунктів');
    },
    noResults: function () {
      return 'Нічого не знайдено';
    },
    searching: function () {
      return 'Пошук…';
    }
  };
});
