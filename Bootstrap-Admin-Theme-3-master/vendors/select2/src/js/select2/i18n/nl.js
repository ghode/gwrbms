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
  // Dutch
  return {
    errorLoading: function () {
      return 'De resultaten konden niet worden geladen.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Gelieve ' + overChars + ' karakters te verwijderen';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Gelieve ' + remainingChars +
        ' of meer karakters in te voeren';

      return message;
    },
    loadingMore: function () {
      return 'Meer resultaten laden…';
    },
    maximumSelected: function (args) {
      var verb = args.maximum == 1 ? 'kan' : 'kunnen';
      var message = 'Er ' + verb + ' maar ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }
      message += ' worden geselecteerd';

      return message;
    },
    noResults: function () {
      return 'Geen resultaten gevonden…';
    },
    searching: function () {
      return 'Zoeken…';
    }
  };
});
