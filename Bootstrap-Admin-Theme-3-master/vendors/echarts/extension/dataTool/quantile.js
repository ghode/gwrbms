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
define(function (require) {

    /**
     * @see <https://github.com/mbostock/d3/blob/master/src/arrays/quantile.js>
     * @see <http://en.wikipedia.org/wiki/Quantile>
     * @param {Array.<number>} ascArr
     */
    return function (ascArr, p) {
        var H = (ascArr.length - 1) * p + 1,
            h = Math.floor(H),
            v = +ascArr[h - 1],
            e = H - h;
        return e ? v + e * (ascArr[h] - v) : v;
    };

});
