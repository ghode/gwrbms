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

Parsley.addMessages('ca', {
  defaultMessage: "Aquest valor sembla ser invàlid.",
  type: {
    email:        "Aquest valor ha de ser una adreça de correu electrònic vàlida.",
    url:          "Aquest valor ha de ser una URL vàlida.",
    number:       "Aquest valor ha de ser un nombre vàlid.",
    integer:      "Aquest valor ha de ser un nombre enter vàlid.",
    digits:       "Aquest valor només pot contenir dígits.",
    alphanum:     "Aquest valor ha de ser alfanumèric."
  },
  notblank:       "Aquest valor no pot ser buit.",
  required:       "Aquest valor és obligatori.",
  pattern:        "Aquest valor és incorrecte.",
  min:            "Aquest valor no pot ser menor que %s.",
  max:            "Aquest valor no pot ser major que %s.",
  range:          "Aquest valor ha d'estar entre %s i %s.",
  minlength:      "Aquest valor és massa curt. La longitud mínima és de %s caràcters.",
  maxlength:      "Aquest valor és massa llarg. La longitud màxima és de %s caràcters.",
  length:         "La longitud d'aquest valor ha de ser d'entre %s i %s caràcters.",
  mincheck:       "Has de marcar un mínim de %s opcions.",
  maxcheck:       "Has de marcar un màxim de %s opcions.",
  check:          "Has de marcar entre %s i %s opcions.",
  equalto:        "Aquest valor ha de ser el mateix."
});

Parsley.setLocale('ca');
