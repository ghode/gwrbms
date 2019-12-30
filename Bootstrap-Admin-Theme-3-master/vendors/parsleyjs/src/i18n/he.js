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

Parsley.addMessages('he', {
  defaultMessage: "נראה כי ערך זה אינו תקף.",
  type: {
    email:        "ערך זה צריך להיות כתובת אימייל.",
    url:          "ערך זה צריך להיות URL תקף.",
    number:       "ערך זה צריך להיות מספר.",
    integer:      "ערך זה צריך להיות מספר שלם.",
    digits:       "ערך זה צריך להיות ספרתי.",
    alphanum:     "ערך זה צריך להיות אלפאנומרי."
  },
  notblank:       "ערך זה אינו יכול להשאר ריק.",
  required:       "ערך זה דרוש.",
  pattern:        "נראה כי ערך זה אינו תקף.",
  min:            "ערך זה צריך להיות לכל הפחות %s.",
  max:            "ערך זה צריך להיות לכל היותר %s.",
  range:          "ערך זה צריך להיות בין %s ל-%s.",
  minlength:      "ערך זה קצר מידי. הוא צריך להיות לכל הפחות %s תווים.",
  maxlength:      "ערך זה ארוך מידי. הוא צריך להיות לכל היותר %s תווים.",
  length:         "ערך זה אינו באורך תקף. האורך צריך להיות בין %s ל-%s תווים.",
  mincheck:       "אנא בחר לפחות %s אפשרויות.",
  maxcheck:       "אנא בחר לכל היותר %s אפשרויות.",
  check:          "אנא בחר בין %s ל-%s אפשרויות.",
  equalto:        "ערך זה צריך להיות זהה."
});

Parsley.setLocale('he');
