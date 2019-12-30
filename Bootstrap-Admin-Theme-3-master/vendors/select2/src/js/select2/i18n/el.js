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
  // Greek (el)
  return {
    errorLoading: function () {
      return 'Τα αποτελέσματα δεν μπόρεσαν να φορτώσουν.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Παρακαλώ διαγράψτε ' + overChars + ' χαρακτήρ';

      if (overChars == 1) {
        message += 'α';
      }
      if (overChars != 1) {
        message += 'ες';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Παρακαλώ συμπληρώστε ' + remainingChars +
        ' ή περισσότερους χαρακτήρες';

      return message;
    },
    loadingMore: function () {
      return 'Φόρτωση περισσότερων αποτελεσμάτων…';
    },
    maximumSelected: function (args) {
      var message = 'Μπορείτε να επιλέξετε μόνο ' + args.maximum + ' επιλογ';

      if (args.maximum == 1) {
        message += 'ή';
      }

      if (args.maximum != 1) {
        message += 'ές';
      }

      return message;
    },
    noResults: function () {
      return 'Δεν βρέθηκαν αποτελέσματα';
    },
    searching: function () {
      return 'Αναζήτηση…';
    }
  };
});