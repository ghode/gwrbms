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
import Parsley from '../parsley/main';

Parsley.addMessages('al', {
  defaultMessage: "Kjo vlerë është invalide.",
  type: {
    email:        "Kjo vlerë duhet të ketë formë valide të një email adrese.",
    url:          "Kjo vlerë duhet të ketë formë valide të një URL-je.",
    number:       "Kjo vlerë duhet të jetë numërike.",
    integer:      "Kjo vlerë duhet të jetë numër i plotë.",
    digits:       "Kjo vlerë duhet të jetë shifër.",
    alphanum:     "Kjo vlerë duhet të jetë alfanumerike."
  },
  notblank:       "Kjo vlerë nuk duhet të jetë e zbrazët.",
  required:       "Kjo vlerë kërkohet domosdosmërisht.",
  pattern:        "Kjo vlerë është invalide.",
  min:            "Kjo vlerë duhet të jetë më e madhe ose e barabartë me %s.",
  max:            "Kjo vlerë duhet të jetë më e vogël ose e barabartë me %s.",
  range:          "Kjo vlerë duhet të jetë në mes të %s dhe %s.",
  minlength:      "Kjo vlerë është shum e shkurtë. Ajo duhet të ketë %s apo më shum shkronja.",
  maxlength:      "Kjo vlerë është shum e gjatë. Ajo duhet të ketë %s apo më pak shkronja",
  length:         "Gjatësia e kësaj vlere është invalide. Ajo duhet të jetë në mes të %s dhe %s shkronjash.",
  mincheck:       "Ju duhet të zgjedhni së paku %s zgjedhje.",
  maxcheck:       "Ju duhet të zgjedhni %s ose më pak zgjedhje.",
  check:          "Ju duhet të zgjedhni në mes të %s dhe %s zgjedhjeve.",
  equalto:        "Kjo vlerë duhet të jetë e njejtë."
});

Parsley.setLocale('al');
