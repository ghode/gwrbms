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

Parsley.addMessages('pl', {
  defaultMessage: "Wartość wygląda na nieprawidłową",
  type: {
    email:        "Wpisz poprawny adres e-mail.",
    url:          "Wpisz poprawny adres URL.",
    number:       "Wpisz poprawną liczbę.",
    integer:      "Dozwolone są jedynie liczby całkowite.",
    digits:       "Dozwolone są jedynie cyfry.",
    alphanum:     "Dozwolone są jedynie znaki alfanumeryczne."
  },
  notblank:       "Pole nie może być puste.",
  required:       "Pole jest wymagane.",
  pattern:        "Pole zawiera nieprawidłową wartość.",
  min:            "Wartość nie może być mniejsza od %s.",
  max:            "Wartość nie może być większa od %s.",
  range:          "Wartość powinna zaweriać się pomiędzy %s a %s.",
  minlength:      "Minimalna ilość znaków wynosi %s.",
  maxlength:      "Maksymalna ilość znaków wynosi %s.",
  length:         "Ilość znaków wynosi od %s do %s.",
  mincheck:       "Wybierz minimalnie %s opcji.",
  maxcheck:       "Wybierz maksymalnie %s opcji.",
  check:          "Wybierz od %s do %s opcji.",
  equalto:        "Wartości nie są identyczne."
});

Parsley.setLocale('pl');
