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

Parsley.addMessages('it', {
  defaultMessage: "Questo valore sembra essere non valido.",
  type: {
    email:        "Questo valore deve essere un indirizzo email valido.",
    url:          "Questo valore deve essere un URL valido.",
    number:       "Questo valore deve essere un numero valido.",
    integer:      "Questo valore deve essere un numero valido.",
    digits:       "Questo valore deve essere di tipo numerico.",
    alphanum:     "Questo valore deve essere di tipo alfanumerico."
  },
  notblank:       "Questo valore non deve essere vuoto.",
  required:       "Questo valore è richiesto.",
  pattern:        "Questo valore non è corretto.",
  min:            "Questo valore deve essere maggiore di %s.",
  max:            "Questo valore deve essere minore di %s.",
  range:          "Questo valore deve essere compreso tra %s e %s.",
  minlength:      "Questo valore è troppo corto. La lunghezza minima è di %s caratteri.",
  maxlength:      "Questo valore è troppo lungo. La lunghezza massima è di %s caratteri.",
  length:         "La lunghezza di questo valore deve essere compresa fra %s e %s caratteri.",
  mincheck:       "Devi scegliere almeno %s opzioni.",
  maxcheck:       "Devi scegliere al più %s opzioni.",
  check:          "Devi scegliere tra %s e %s opzioni.",
  equalto:        "Questo valore deve essere identico."
});

Parsley.setLocale('it');
