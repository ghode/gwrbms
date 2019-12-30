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

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/pl",[],function(){var e=["znak","znaki","znaków"],t=["element","elementy","elementów"],n=function(t,n){if(t===1)return n[0];if(t>1&&t<=4)return n[1];if(t>=5)return n[2]};return{errorLoading:function(){return"Nie można załadować wyników."},inputTooLong:function(t){var r=t.input.length-t.maximum;return"Usuń "+r+" "+n(r,e)},inputTooShort:function(t){var r=t.minimum-t.input.length;return"Podaj przynajmniej "+r+" "+n(r,e)},loadingMore:function(){return"Trwa ładowanie…"},maximumSelected:function(e){return"Możesz zaznaczyć tylko "+e.maximum+" "+n(e.maximum,t)},noResults:function(){return"Brak wyników"},searching:function(){return"Trwa wyszukiwanie…"}}}),{define:e.define,require:e.require}})();