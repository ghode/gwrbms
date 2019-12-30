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

//! moment.js
//! version : 2.13.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

import {hooks as moment, setHookCallback} from './lib/utils/hooks';
import {
    createInvalid as invalid,
    createInZone as parseZone,
    createLocal as local,
    createUnix as unix,
    createUTC as utc,
    isMoment,
    max,
    min,
    momentPrototype as fn,
    now
} from './lib/moment/moment';

import {
    defineLocale,
    getLocale as localeData,
    getSetGlobalLocale as locale,
    listLocales as locales,
    listMonths as months,
    listMonthsShort as monthsShort,
    listWeekdays as weekdays,
    listWeekdaysMin as weekdaysMin,
    listWeekdaysShort as weekdaysShort,
    updateLocale
} from './lib/locale/locale';

import {
    createDuration as duration,
    getSetRelativeTimeThreshold as relativeTimeThreshold,
    isDuration
} from './lib/duration/duration';

import {normalizeUnits} from './lib/units/units';

import isDate from './lib/utils/is-date';

moment.version = '2.13.0';

setHookCallback(local);

moment.fn                    = fn;
moment.min                   = min;
moment.max                   = max;
moment.now                   = now;
moment.utc                   = utc;
moment.unix                  = unix;
moment.months                = months;
moment.isDate                = isDate;
moment.locale                = locale;
moment.invalid               = invalid;
moment.duration              = duration;
moment.isMoment              = isMoment;
moment.weekdays              = weekdays;
moment.parseZone             = parseZone;
moment.localeData            = localeData;
moment.isDuration            = isDuration;
moment.monthsShort           = monthsShort;
moment.weekdaysMin           = weekdaysMin;
moment.defineLocale          = defineLocale;
moment.updateLocale          = updateLocale;
moment.locales               = locales;
moment.weekdaysShort         = weekdaysShort;
moment.normalizeUnits        = normalizeUnits;
moment.relativeTimeThreshold = relativeTimeThreshold;
moment.prototype             = fn;

export default moment;
