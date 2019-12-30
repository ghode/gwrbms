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
  // European Portuguese
  return {
    errorLoading: function () {
      return 'Os resultados não puderam ser carregados.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Por favor apague ' + overChars + ' ';

      message += overChars != 1 ? 'caracteres' : 'carácter';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Introduza ' + remainingChars + ' ou mais caracteres';

      return message;
    },
    loadingMore: function () {
      return 'A carregar mais resultados…';
    },
    maximumSelected: function (args) {
      var message = 'Apenas pode seleccionar ' + args.maximum + ' ';

      message += args.maximum != 1 ? 'itens' : 'item';

      return message;
    },
    noResults: function () {
      return 'Sem resultados';
    },
    searching: function () {
      return 'A procurar…';
    }
  };
});
