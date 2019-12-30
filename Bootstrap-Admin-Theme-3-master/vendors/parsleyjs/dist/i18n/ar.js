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
// Load this after Parsley

Parsley.addMessages('ar', {
  defaultMessage: "تأكد من صحة القيمة المدخل",
  type: {
    email:        "تأكد من إدخال بريد الكتروني صحيح",
    url:          "تأكد من إدخال رابط صحيح",
    number:       "تأكد من إدخال رقم",
    integer:      "تأكد من إدخال عدد صحيح بدون كسور",
    digits:       "تأكد من إدخال رقم",
    alphanum:     "تأكد من إدخال حروف وأرقام فقط"
  },
  notblank:       "تأكد من تعبئة الحقل",
  required:       "هذا الحقل مطلوب",
  pattern:        "القيمة المدخلة غير صحيحة",
  min:            "القيمة المدخلة يجب أن تكون أكبر من %s.",
  max:            "القيمة المدخلة يجب أن تكون أصغر من %s.",
  range:          "القيمة المدخلة يجب أن تكون بين %s و %s.",
  minlength:      "القيمة المدخلة قصيرة جداً . تأكد من إدخال %s حرف أو أكثر",
  maxlength:      "القيمة المدخلة طويلة . تأكد من إدخال %s حرف أو أقل",
  length:         "القيمة المدخلة غير صحيحة. تأكد من إدخال بين  %s و %s خانة",
  mincheck:       "يجب اختيار %s خيار على الأقل.",
  maxcheck:       "يجب اختيار%s خيار أو أقل",
  check:          "يجب اختيار بين %s و %s خيار.",
  equalto:        "تأكد من تطابق القيمتين المدخلة."
});

Parsley.setLocale('ar');
