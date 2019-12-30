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

Parsley.addMessages('ms', {
  dateiso:  "Nilai hendaklah berbentuk tarikh yang sah (YYYY-MM-DD).",
  minwords: "Ayat terlalu pendek. Ianya perlu sekurang-kurangnya %s patah perkataan.",
  maxwords: "Ayat terlalu panjang. Ianya tidak boleh melebihi %s patah perkataan.",
  words:    "Panjang ayat tidak sah. Jumlah perkataan adalah diantara %s hingga %s patah perkataan.",
  gt:       "Nilai lebih besar diperlukan.",
  gte:      "Nilai hendaklah lebih besar atau sama.",
  lt:       "Nilai lebih kecil diperlukan.",
  lte:      "Nilai hendaklah lebih kecil atau sama."
});
