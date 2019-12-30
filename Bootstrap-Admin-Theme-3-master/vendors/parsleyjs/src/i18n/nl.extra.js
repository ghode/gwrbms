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

Parsley.addMessages('nl', {
  dateiso:  "Deze waarde moet een datum in het volgende formaat zijn: (YYYY-MM-DD).",
  minwords: "Deze waarde moet minstens %s woorden bevatten.",
  maxwords: "Deze waarde mag maximaal %s woorden bevatten.",
  words:    "Deze waarde moet tussen de %s en %s woorden bevatten.",
  gt:       "Deze waarde moet groter dan %s zijn.",
  lt:       "Deze waarde moet kleiner dan %s zijn."
});
