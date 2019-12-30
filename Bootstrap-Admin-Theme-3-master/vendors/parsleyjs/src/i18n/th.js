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

Parsley.addMessages('th', {
  defaultMessage: "ค่านี้ดูเหมือนว่าจะไม่ถูกต้อง",
  type: {
    email:        "ค่านี้ควรจะเป็นอีเมลที่ถูกต้อง",
    url:          "ค่านี้ควรจะเป็น url ที่ถูกต้อง",
    number:       "ค่านี้ควรจะเป็นตัวเลขที่ถูกต้อง",
    integer:      "ค่านี้ควรจะเป็นจำนวนเต็มที่ถูกต้อง",
    digits:       "ค่านี้ควรเป็นทศนิยมที่ถูกต้อง",
    alphanum:     "ค่านี้ควรเป็นอักขระตัวอักษรหรือตัวเลขที่ถูกต้อง"
  },
  notblank:       "ค่านี้ไม่ควรจะว่าง",
  required:       "ค่านี้จำเป็น",
  pattern:        "ค่านี้ดูเหมือนว่าจะไม่ถูกต้อง",
  min:            "ค่านี้ควรมากกว่าหรือเท่ากับ %s.",
  max:            "ค่านี้ควรจะน้อยกว่าหรือเท่ากับ %s.",
  range:          "ค่ายี้ควรจะอยู่ระหว่าง %s และ %s.",
  minlength:      "ค่านี้สั้นเกินไป ควรจะมี %s อักขระหรือมากกว่า",
  maxlength:      "ค่านี้ยาวเกินไป ควรจะมี %s อักขระหรือน้อยกว่า",
  length:         "ความยาวของค่านี้ไม่ถูกต้อง ควรมีความยาวอยู่ระหว่าง %s และ %s อักขระ",
  mincheck:       "คุณควรเลือกอย่างน้อย %s ตัวเลือก",
  maxcheck:       "คุณควรเลือก %s ตัวเลือกหรือน้อยกว่า",
  check:          "คุณควรเลือกระหว่าง %s และ %s ตัวเลือก",
  equalto:        "ค่านี้ควรจะเหมือนกัน"
});

Parsley.setLocale('th');
