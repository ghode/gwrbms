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

Parsley.addMessages('sq', {
  defaultMessage: "Kjo vlere eshte e pasakte.",
  type: {
    email:        "Duhet te jete nje email i vlefshem.",
    url:          "Duhet te jete nje URL e vlefshme.",
    number:       "Duhet te jete numer.",
    integer:      "Kjo vlere duhet te jete integer.",
    digits:       "Kjo vlere duhet te permbaje digit.",
    alphanum:     "Kjo vlere duhet te permbaje vetel alphanumeric."
  },
  notblank:       "Nuk mund te lihet bosh.",
  required:       "Eshte e detyrueshme.",
  pattern:        "Kjo vlere eshte e pasakte.",
  min:            "Duhet te jete me e madhe ose baraz me %s.",
  max:            "Duhet te jete me e vogel ose baraz me %s.",
  range:          "Duhet te jete midis %s dhe %s.",
  minlength:      "Kjo vlere eshte shume e shkurter. Ajo duhet te permbaje min %s karaktere.",
  maxlength:      "Kjo vlere eshte shume e gjate. Ajo duhet te permbaje max %s karaktere.",
  length:         "Gjatesia e kesaj vlere eshte e pasakte. Ajo duhet te jete midis %s dhe %s karakteresh.",
  mincheck:       "Ju duhet te zgjidhni te pakten %s vlere.",
  maxcheck:       "Ju duhet te zgjidhni max %s vlera.",
  check:          "Ju mund te zgjidhni midis %s dhe %s vlerash.",
  equalto:        "Kjo vlere duhet te jete e njejte."
});

Parsley.setLocale('sq');
