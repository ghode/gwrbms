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

// Validation errors messages for Parsley
import Parsley from '../parsley';

Parsley.addMessages('bg', {
  defaultMessage: "Невалидна стойност.",
  type: {
    email:        "Невалиден имейл адрес.",
    url:          "Невалиден URL адрес.",
    number:       "Невалиден номер.",
    integer:      "Невалиден номер.",
    digits:       "Невалидни цифри.",
    alphanum:     "Стойността трябва да садържа само букви или цифри."
  },
  notblank:       "Полето е задължително.",
  required:       "Полето е задължително.",
  pattern:        "Невалидна стойност.",
  min:            "Стойността трябва да бъде по-голяма или равна на %s.",
  max:            "Стойността трябва да бъде по-малка или равна на %s.",
  range:          "Стойността трябва да бъде между %s и %s.",
  minlength:      "Стойността е прекалено кратка. Мин. дължина: %s символа.",
  maxlength:      "Стойността е прекалено дълга. Макс. дължина: %s символа.",
  length:         "Дължината на стойността трябва да бъде между %s и %s символа.",
  mincheck:       "Трябва да изберете поне %s стойности.",
  maxcheck:       "Трябва да изберете най-много %s стойности.",
  check:          "Трябва да изберете между %s и %s стойности.",
  equalto:        "Стойността трябва да съвпада."
});

Parsley.setLocale('bg');
