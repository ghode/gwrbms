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
  // Japanese
  return {
    errorLoading: function () {
      return '結果が読み込まれませんでした';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = overChars + ' 文字を削除してください';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = '少なくとも ' + remainingChars + ' 文字を入力してください';

      return message;
    },
    loadingMore: function () {
      return '読み込み中…';
    },
    maximumSelected: function (args) {
      var message = args.maximum + ' 件しか選択できません';

      return message;
    },
    noResults: function () {
      return '対象が見つかりません';
    },
    searching: function () {
      return '検索しています…';
    }
  };
});
