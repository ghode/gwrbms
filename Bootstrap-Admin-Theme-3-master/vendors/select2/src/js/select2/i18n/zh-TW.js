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
  // Chinese (Traditional)
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = '請刪掉' + overChars + '個字元';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = '請再輸入' + remainingChars + '個字元';

      return message;
    },
    loadingMore: function () {
      return '載入中…';
    },
    maximumSelected: function (args) {
      var message = '你只能選擇最多' + args.maximum + '項';

      return message;
    },
    noResults: function () {
      return '沒有找到相符的項目';
    },
    searching: function () {
      return '搜尋中…';
    }
  };
});
