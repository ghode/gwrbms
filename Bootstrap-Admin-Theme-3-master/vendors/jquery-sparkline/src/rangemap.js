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

$.RangeMapClass = RangeMap = createClass({
    init: function (map) {
        var key, range, rangelist = [];
        for (key in map) {
            if (map.hasOwnProperty(key) && typeof key === 'string' && key.indexOf(':') > -1) {
                range = key.split(':');
                range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
                range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
                range[2] = map[key];
                rangelist.push(range);
            }
        }
        this.map = map;
        this.rangelist = rangelist || false;
    },

    get: function (value) {
        var rangelist = this.rangelist,
            i, range, result;
        if ((result = this.map[value]) !== undefined) {
            return result;
        }
        if (rangelist) {
            for (i = rangelist.length; i--;) {
                range = rangelist[i];
                if (range[0] <= value && range[1] >= value) {
                    return range[2];
                }
            }
        }
        return undefined;
    }
});

// Convenience function
$.range_map = function (map) {
    return new RangeMap(map);
};

