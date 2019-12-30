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

(function () {
    "use strict";
    var attrs = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
    var gFn = function (attr) {
        return function () {
            return this[attr];
        };
    };

    var sFn = function (attr) {
        return function (val) {
            this[attr] = val;
            return this;
        };
    };
    var addSetFuncs = function (context, attrs) {
        for (var i = 0; i < attrs.length; i++) {
            var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
            context.prototype[$a] = 0;
            context.prototype["get" + $b] = gFn($a);
            context.prototype["set" + $b] = sFn($a);
        }
    };

    var setMonthsAndYears = function (orient, d1, d2, context) {
        function inc() {
            d1.addMonths(-orient);
            context.months++;
            if (context.months === 12) {
                context.years++;
                context.months = 0;
            }
        }

        if (orient === +1) {
            while (d1 > d2) {
                inc();
            }
        } else {
            while (d1 < d2) {
                inc();
            }
        }
        context.months--;
        context.months *= orient;
        context.years *= orient;
    };

    var adjustForDST = function (orient, startDate, endDate) {
        var hasDSTMismatch = (false === (startDate.isDaylightSavingTime() === endDate.isDaylightSavingTime()));
        if (hasDSTMismatch && orient === 1) {
            startDate.addHours(-1);
        } else if (hasDSTMismatch) {
            startDate.addHours(1);
        }
    };
    /**
     * TimePeriod(startDate, endDate);
     * TimePeriod(years, months, days, hours, minutes, seconds, milliseconds);
     */
    var TimePeriod = function (years, months, days, hours, minutes, seconds, milliseconds) {
        if (arguments.length === 7) {
            this.set(years, months, days, hours, minutes, seconds, milliseconds);
        } else if (arguments.length === 2 && arguments[0] instanceof Date && arguments[1] instanceof Date) {
            var startDate = arguments[0].clone();
            var endDate = arguments[1].clone();
            var orient = (startDate > endDate) ? +1 : -1;
            this.dates = {
                start: arguments[0].clone(),
                end: arguments[1].clone()
            };

            setMonthsAndYears(orient, startDate, endDate, this);
            adjustForDST(orient, startDate, endDate);
            // // TODO - adjust for DST
            var diff = endDate - startDate;
            if (diff !== 0) {
                var ts = new TimeSpan(diff);
                this.set(this.years, this.months, ts.getDays(), ts.getHours(), ts.getMinutes(), ts.getSeconds(), ts.getMilliseconds());
            }
        }
        return this;
    };
    // create all the set functions.
    addSetFuncs(TimePeriod, attrs);
    TimePeriod.prototype.set = function (years, months, days, hours, minutes, seconds, milliseconds) {
        this.setYears(years || this.getYears());
        this.setMonths(months || this.getMonths());
        this.setDays(days || this.getDays());
        this.setHours(hours || this.getHours());
        this.setMinutes(minutes || this.getMinutes());
        this.setSeconds(seconds || this.getSeconds());
        this.setMilliseconds(milliseconds || this.getMilliseconds());
    };

    Date.TimePeriod = TimePeriod;

    if (typeof window !== "undefined") {
        // keeping API compatible for v1.x
        window.TimePeriod = TimePeriod;
    }
}());