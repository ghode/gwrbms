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
  // Czech
  function small (count, masc) {
    switch(count) {
      case 2:
        return masc ? 'dva' : 'dvě';
      case 3:
        return 'tři';
      case 4:
        return 'čtyři';
    }
    return '';
  }
  return {
    errorLoading: function () {
      return 'Výsledky nemohly být načteny.';
    },
    inputTooLong: function (args) {
      var n = args.input.length - args.maximum;

      if (n == 1) {
        return 'Prosím zadejte o jeden znak méně';
      } else if (n <= 4) {
        return 'Prosím zadejte o ' + small(n, true) + ' znaky méně';
      } else {
        return 'Prosím zadejte o ' + n + ' znaků méně';
      }
    },
    inputTooShort: function (args) {
      var n = args.minimum - args.input.length;

      if (n == 1) {
        return 'Prosím zadejte ještě jeden znak';
      } else if (n <= 4) {
        return 'Prosím zadejte ještě další ' + small(n, true) + ' znaky';
      } else {
        return 'Prosím zadejte ještě dalších ' + n + ' znaků';
      }
    },
    loadingMore: function () {
      return 'Načítají se další výsledky…';
    },
    maximumSelected: function (args) {
      var n = args.maximum;

      if (n == 1) {
        return 'Můžete zvolit jen jednu položku';
      } else if (n <= 4) {
        return 'Můžete zvolit maximálně ' + small(n, false) + ' položky';
      } else {
        return 'Můžete zvolit maximálně ' + n + ' položek';
      }
    },
    noResults: function () {
      return 'Nenalezeny žádné položky';
    },
    searching: function () {
      return 'Vyhledávání…';
    }
  };
});
