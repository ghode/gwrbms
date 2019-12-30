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

Parsley.addMessages('tr', {
  defaultMessage: "Girdiğiniz değer geçerli değil.",
  type: {
    email:        "Geçerli bir e-mail adresi yazmanız gerekiyor.",
    url:          "Geçerli bir bağlantı adresi yazmanız gerekiyor.",
    number:       "Geçerli bir sayı yazmanız gerekiyor.",
    integer:      "Geçerli bir tamsayı yazmanız gerekiyor.",
    digits:       "Geçerli bir rakam yazmanız gerekiyor.",
    alphanum:     "Geçerli bir alfanümerik değer yazmanız gerekiyor."
  },
  notblank:       "Bu alan boş bırakılamaz.",
  required:       "Bu alan boş bırakılamaz.",
  pattern:        "Girdiğiniz değer geçerli değil.",
  min:            "Bu alan %s değerinden büyük ya da bu değere eşit olmalı.",
  max:            "Bu alan %s değerinden küçük ya da bu değere eşit olmalı.",
  range:          "Bu alan %s ve %s değerleri arasında olmalı.",
  minlength:      "Bu alanın uzunluğu %s karakter veya daha fazla olmalı.",
  maxlength:      "Bu alanın uzunluğu %s karakter veya daha az olmalı.",
  length:         "Bu alanın uzunluğu %s ve %s karakter arasında olmalı.",
  mincheck:       "En az %s adet seçim yapmalısınız.",
  maxcheck:       "En fazla %s seçim yapabilirsiniz.",
  check:          "Bu alan için en az %s, en fazla %s seçim yapmalısınız.",
  equalto:        "Bu alanın değeri aynı olmalı."
});

Parsley.setLocale('tr');
