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

Parsley.addMessages('lv', {
  defaultMessage: "Šis ieraksts veikts nekorekti.",
  type: {
    email:        "Šeit jāieraksta derīgs e-pasts.",
    url:          "Šeit jāieraksta korekts url.",
    number:       "Šeit jāieraksta derīgs skaitlis.",
    integer:      "Šeit jāieraksta vesels skaitlis.",
    digits:       "Šeit jāieraksta cipari.",
    alphanum:     "Šeit derīgi tikai alfabēta burti vai cipari."
  },
  notblank:       "Šis ieraksts nedrīkst būt tukšs.",
  required:       "Šis ieraksts ir obligāti jāaizpilda.",
  pattern:        "Šis ieraksts aizpildīts nekorekti.",
  min:            "Šai vērtībai jābūt lielākai vai vienādai ar %s.",
  max:            "Šai vērtībai jābūt mazākai vai vienādai ar %s.",
  range:          "Šai vērtībai jābūt starp %s un %s.",
  minlength:      "Vērtībai jābūt vismaz %s simbolu garai.",
  maxlength:      "Vērtībai jābūt %s simbolus garai vai īsākai.",
  length:         "Šīs vērtības garums ir neatbilstošs. Tai jābūt %s līdz %s simbolus garai.",
  mincheck:       "Jāizvēlas vismaz %s varianti.",
  maxcheck:       "Jāizvēlas %s varianti vai mazāk.",
  check:          "Jāizvēlas no %s līdz %s variantiem.",
  equalto:        "Šai vērtībai jāsakrīt."
});

Parsley.setLocale('lv');
