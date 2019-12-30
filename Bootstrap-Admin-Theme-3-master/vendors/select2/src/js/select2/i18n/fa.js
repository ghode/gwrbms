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

/* jshint -W100 */
/* jslint maxlen: 86 */
define(function () {
  // Farsi (Persian)
  return {
    errorLoading: function () {
      return 'امکان بارگذاری نتایج وجود ندارد.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'لطفاً ' + overChars + ' کاراکتر را حذف نمایید';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'لطفاً تعداد ' + remainingChars + ' کاراکتر یا بیشتر وارد نمایید';

      return message;
    },
    loadingMore: function () {
      return 'در حال بارگذاری نتایج بیشتر...';
    },
    maximumSelected: function (args) {
      var message = 'شما تنها می‌توانید ' + args.maximum + ' آیتم را انتخاب نمایید';

      return message;
    },
    noResults: function () {
      return 'هیچ نتیجه‌ای یافت نشد';
    },
    searching: function () {
      return 'در حال جستجو...';
    }
  };
});
