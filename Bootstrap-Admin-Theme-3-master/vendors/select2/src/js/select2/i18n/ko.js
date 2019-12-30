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
  // Korean
  return {
    errorLoading: function () {
      return '결과를 불러올 수 없습니다.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = '너무 깁니다. ' + overChars + ' 글자 지워주세요.';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = '너무 짧습니다. ' + remainingChars + ' 글자 더 입력해주세요.';

      return message;
    },
    loadingMore: function () {
      return '불러오는 중…';
    },
    maximumSelected: function (args) {
      var message = '최대 ' + args.maximum + '개까지만 선택 가능합니다.';

      return message;
    },
    noResults: function () {
      return '결과가 없습니다.';
    },
    searching: function () {
      return '검색 중…';
    }
  };
});
