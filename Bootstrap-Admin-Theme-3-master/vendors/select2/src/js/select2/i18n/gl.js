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
  // Galician
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Elimine ';

      if (overChars === 1) {
        message += 'un carácter';
      } else {
        message += overChars + ' caracteres';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Engada ';

      if (remainingChars === 1) {
        message += 'un carácter';
      } else {
        message += remainingChars + ' caracteres';
      }

      return message;
    },
    loadingMore: function () {
      return 'Cargando máis resultados…';
    },
    maximumSelected: function (args) {
      var message = 'Só pode ';

      if (args.maximum === 1) {
        message += 'un elemento';
      } else {
        message += args.maximum + ' elementos';
      }

      return message;
    },
    noResults: function () {
      return 'Non se atoparon resultados';
    },
    searching: function () {
      return 'Buscando…';
    }
  };
});
