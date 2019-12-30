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

Parsley.addMessages('id', {
  defaultMessage: "tidak valid",
  type: {
    email:        "email tidak valid",
    url:          "url tidak valid",
    number:       "nomor tidak valid",
    integer:      "integer tidak valid",
    digits:       "harus berupa digit",
    alphanum:     "harus berupa alphanumeric"
  },
  notblank:       "tidak boleh kosong",
  required:       "tidak boleh kosong",
  pattern:        "tidak valid",
  min:            "harus lebih besar atau sama dengan %s.",
  max:            "harus lebih kecil atau sama dengan %s.",
  range:          "harus dalam rentang %s dan %s.",
  minlength:      "terlalu pendek, minimal %s karakter atau lebih.",
  maxlength:      "terlalu panjang, maksimal %s karakter atau kurang.",
  length:         "panjang karakter harus dalam rentang %s dan %s",
  mincheck:       "pilih minimal %s pilihan",
  maxcheck:       "pilih maksimal %s pilihan",
  check:          "pilih antar %s dan %s pilihan",
  equalto:        "harus sama"
});

Parsley.setLocale('id');
