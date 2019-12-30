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

Parsley.addMessages('fr', {
  defaultMessage: "Cette valeur semble non valide.",
  type: {
    email:        "Cette valeur n'est pas une adresse email valide.",
    url:          "Cette valeur n'est pas une URL valide.",
    number:       "Cette valeur doit être un nombre.",
    integer:      "Cette valeur doit être un entier.",
    digits:       "Cette valeur doit être numérique.",
    alphanum:     "Cette valeur doit être alphanumérique."
  },
  notblank:       "Cette valeur ne peut pas être vide.",
  required:       "Ce champ est requis.",
  pattern:        "Cette valeur semble non valide.",
  min:            "Cette valeur ne doit pas être inférieure à %s.",
  max:            "Cette valeur ne doit pas excéder %s.",
  range:          "Cette valeur doit être comprise entre %s et %s.",
  minlength:      "Cette chaîne est trop courte. Elle doit avoir au minimum %s caractères.",
  maxlength:      "Cette chaîne est trop longue. Elle doit avoir au maximum %s caractères.",
  length:         "Cette valeur doit contenir entre %s et %s caractères.",
  mincheck:       "Vous devez sélectionner au moins %s choix.",
  maxcheck:       "Vous devez sélectionner %s choix maximum.",
  check:          "Vous devez sélectionner entre %s et %s choix.",
  equalto:        "Cette valeur devrait être identique."
});

Parsley.setLocale('fr');
