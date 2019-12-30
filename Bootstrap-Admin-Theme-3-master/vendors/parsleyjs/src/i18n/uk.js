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

Parsley.addMessages('uk', {
  defaultMessage: "Некоректне значення.",
  type: {
    email:        "Введіть адресу електронної пошти.",
    url:          "Введіть URL-адресу.",
    number:       "Введіть число.",
    integer:      "Введіть ціле число.",
    digits:       "Введіть тільки цифри.",
    alphanum:     "Введіть буквено-цифрове значення."
  },
  notblank:       "Це поле повинно бути заповнено.",
  required:       "Обов'язкове поле",
  pattern:        "Це значення некоректно.",
  min:            "Це значення повинно бути не менше ніж %s.",
  max:            "Це значення повинно бути не більше ніж %s.",
  range:          "Це значення повинно бути від %s до %s.",
  minlength:      "Це значення повинно містити не менше ніж %s символів.",
  maxlength:      "Це значення повинно містити не більше ніж %s символів.",
  length:         "Це значення повинно містити від %s до %s символів.",
  mincheck:       "Виберіть не менше %s значень.",
  maxcheck:       "Виберіть не більше %s значень.",
  check:          "Виберіть від %s до %s значень.",
  equalto:        "Це значення повинно збігатися."
});

Parsley.setLocale('uk');
