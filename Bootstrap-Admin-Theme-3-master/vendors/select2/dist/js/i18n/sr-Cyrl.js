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

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/sr-Cyrl",[],function(){function e(e,t,n,r){return e%10==1&&e%100!=11?t:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?n:r}return{errorLoading:function(){return"Преузимање није успело."},inputTooLong:function(t){var n=t.input.length-t.maximum,r="Обришите "+n+" симбол";return r+=e(n,"","а","а"),r},inputTooShort:function(t){var n=t.minimum-t.input.length,r="Укуцајте бар још "+n+" симбол";return r+=e(n,"","а","а"),r},loadingMore:function(){return"Преузимање још резултата…"},maximumSelected:function(t){var n="Можете изабрати само "+t.maximum+" ставк";return n+=e(t.maximum,"у","е","и"),n},noResults:function(){return"Ништа није пронађено"},searching:function(){return"Претрага…"}}}),{define:e.define,require:e.require}})();