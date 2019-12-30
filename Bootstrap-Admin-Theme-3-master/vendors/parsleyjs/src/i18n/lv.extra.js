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

Parsley.addMessages('lv', {
  dateiso:  "Šai vērtībai jābūt korekti noformētam datumam (YYYY-MM-DD).",
  minwords: "Šī vērtība ir par īsu. Tai jābūt vismaz %s vārdus garai.",
  maxwords: "Šī vērtība ir par garu. Tai jābūt %s vārdus garai vai īsākai.",
  words:    "Šīs vērtības garums ir nederīgs. Tai jābūt no %s līdz %s vārdus garai.",
  gt:       "Šai vērtībai jābūt lielākai.",
  gte:      "Šai vērtībai jābūt lielākai vai vienādai.",
  lt:       "Šai vērtībai jābūt mazākai.",
  lte:      "Šai vērtībai jābūt mazākai vai vienādai.",
  notequalto: "Šai vērtībai jābūt atšķirīgai."
});
