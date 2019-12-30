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

Parsley.addMessages('fa', {
  defaultMessage: "این مقدار صحیح نمی باشد",
  type: {
    email:        "این مقدار باید یک ایمیل معتبر باشد",
    url:          "این مقدار باید یک آدرس معتبر باشد",
    number:       "این مقدار باید یک عدد معتبر باشد",
    integer:      "این مقدار باید یک عدد صحیح معتبر باشد",
    digits:       "این مقدار باید یک عدد باشد",
    alphanum:     "این مقدار باید حروف الفبا باشد"
  },
  notblank:       "این مقدار نباید خالی باشد",
  required:       "این مقدار باید وارد شود",
  pattern:        "این مقدار به نظر می رسد نامعتبر است",
  min:            "این مقدیر باید بزرگتر با مساوی %s باشد",
  max:            "این مقدار باید کمتر و یا مساوی %s باشد",
  range:          "این مقدار باید بین %s و %s باشد",
  minlength:      "این مقدار بیش از حد کوتاه است. باید %s کاراکتر یا بیشتر باشد.",
  maxlength:      "این مقدار بیش از حد طولانی است. باید %s کاراکتر یا کمتر باشد.",
  length:         "این مقدار نامعتبر است و باید بین %s و %s باشد",
  mincheck:       "شما حداقل باید %s گزینه را انتخاب کنید.",
  maxcheck:       "شما حداکثر می‌توانید %s انتخاب داشته باشید.",
  check:          "باید بین %s و %s مورد انتخاب کنید",
  equalto:        "این مقدار باید یکسان باشد"
});

Parsley.setLocale('fa');
