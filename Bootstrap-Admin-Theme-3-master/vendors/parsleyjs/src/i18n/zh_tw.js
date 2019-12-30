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

Parsley.addMessages('zh-tw', {
  defaultMessage: "這個值似乎是無效的。",
  type: {
    email:        "請輸入一個正確的電子郵件地址。",
    url:          "請輸入一個有效的網址。",
    number:       "請輸入一個數字。",
    integer:      "請輸入一個整數。",
    digits:       "這個欄位只接受數字。",
    alphanum:     "這個欄位只接受英文字母或是數字。"
  },
  notblank:       "這個欄位不能為空白。",
  required:       "這個欄位必須填寫。",
  pattern:        "這個值似乎是無效的。",
  min:            "輸入的值應該大於或等於 %s",
  max:            "輸入的值應該小於或等於 %s",
  range:          "輸入的值應該在 %s 和 %s 之間。",
  minlength:      "輸入的值至少要有 %s 個字元。",
  maxlength:      "輸入的值最多可以有 %s 個字元。",
  length:         "字元長度應該在 %s 和 %s 之間。",
  mincheck:       "你至少要選擇 %s 個項目。",
  maxcheck:       "你最多可選擇 %s 個項目。",
  check:          "你必須選擇 %s 到 %s 個項目。",
  equalto:        "輸入值不同。"
});

Parsley.setLocale('zh-tw');
