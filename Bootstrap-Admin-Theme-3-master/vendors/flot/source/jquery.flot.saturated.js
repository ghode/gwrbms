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

(function ($) {
    'use strict';
    var saturated = {
        saturate: function (a) {
            if (a === Infinity) {
                return Number.MAX_VALUE;
            }

            if (a === -Infinity) {
                return -Number.MAX_VALUE;
            }

            return a;
        },
        delta: function (min, max, noTicks) {
            return ((max - min) / noTicks) === Infinity ? (max / noTicks - min / noTicks) : (max - min) / noTicks
        },
        multiply: function (a, b) {
            return saturated.saturate(a * b);
        },
        // returns c * bInt * a. Beahves properly in the case where c is negative
        // and bInt * a is bigger that Number.MAX_VALUE (Infinity)
        multiplyAdd: function (a, bInt, c) {
            if (isFinite(a * bInt)) {
                return saturated.saturate(a * bInt + c);
            } else {
                var result = c;

                for (var i = 0; i < bInt; i++) {
                    result += a;
                }

                return saturated.saturate(result);
            }
        },
        // round to nearby lower multiple of base
        floorInBase: function (n, base) {
            return base * Math.floor(n / base);
        }
    };

    $.plot.saturated = saturated;
})(jQuery);
