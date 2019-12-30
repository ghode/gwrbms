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

Parsley.addMessages('fi', {
  defaultMessage: "Sy&ouml;tetty arvo on virheellinen.",
  type: {
    email:        "S&auml;hk&ouml;postiosoite on virheellinen.",
    url:          "Url-osoite on virheellinen.",
    number:       "Sy&ouml;t&auml; numero.",
    integer:      "Sy&ouml;t&auml; kokonaisluku.",
    digits:       "Sy&ouml;t&auml; ainoastaan numeroita.",
    alphanum:     "Sy&ouml;t&auml; ainoastaan kirjaimia tai numeroita."
  },
  notblank:       "T&auml;m&auml; kentt&auml;&auml; ei voi j&auml;tt&auml;&auml; tyhj&auml;ksi.",
  required:       "T&auml;m&auml; kentt&auml; on pakollinen.",
  pattern:        "Sy&ouml;tetty arvo on virheellinen.",
  min:            "Sy&ouml;t&auml; arvo joka on yht&auml; suuri tai suurempi kuin %s.",
  max:            "Sy&ouml;t&auml; arvo joka on pienempi tai yht&auml; suuri kuin %s.",
  range:          "Sy&ouml;t&auml; arvo v&auml;lilt&auml;: %s-%s.",
  minlength:      "Sy&ouml;tetyn arvon t&auml;ytyy olla v&auml;hint&auml;&auml;n %s merkki&auml; pitk&auml;.",
  maxlength:      "Sy&ouml;tetty arvo saa olla enint&auml;&auml;n %s merkki&auml; pitk&auml;.",
  length:         "Sy&ouml;tetyn arvon t&auml;ytyy olla v&auml;hint&auml;&auml;n %s ja enint&auml;&auml;n %s merkki&auml; pitk&auml;.",
  mincheck:       "Valitse v&auml;hint&auml;&auml;n %s vaihtoehtoa.",
  maxcheck:       "Valitse enint&auml;&auml;n %s vaihtoehtoa.",
  check:          "Valitse %s-%s vaihtoehtoa.",
  equalto:        "Salasanat eiv&auml;t t&auml;sm&auml;&auml;."
});

Parsley.setLocale('fi');
