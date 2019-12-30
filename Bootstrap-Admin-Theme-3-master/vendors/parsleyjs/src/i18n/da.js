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

Parsley.addMessages('da', {
  defaultMessage: "Indtast venligst en korrekt værdi.",
  type: {
    email:        "Indtast venligst en korrekt emailadresse.",
    url:          "Indtast venligst en korrekt internetadresse.",
    number:       "Indtast venligst et tal.",
    integer:      "Indtast venligst et heltal.",
    digits:       "Dette felt må kun bestå af tal.",
    alphanum:     "Dette felt skal indeholde både tal og bogstaver."
  },
  notblank:       "Dette felt må ikke være tomt.",
  required:       "Dette felt er påkrævet.",
  pattern:        "Ugyldig indtastning.",
  min:            "Dette felt skal indeholde et tal som er større end eller lig med %s.",
  max:            "Dette felt skal indeholde et tal som er mindre end eller lig med %s.",
  range:          "Dette felt skal indeholde et tal mellem %s og %s.",
  minlength:      "Indtast venligst mindst %s tegn.",
  maxlength:      "Dette felt kan højst indeholde %s tegn.",
  length:         "Længden af denne værdi er ikke korrekt. Værdien skal være mellem %s og %s tegn lang.",
  mincheck:       "Vælg mindst %s muligheder.",
  maxcheck:       "Vælg op til %s muligheder.",
  check:          "Vælg mellem %s og %s muligheder.",
  equalto:        "De to felter er ikke ens."
});

Parsley.setLocale('da');
