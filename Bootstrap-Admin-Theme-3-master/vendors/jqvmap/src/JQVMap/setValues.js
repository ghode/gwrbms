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

JQVMap.prototype.setValues = function (values) {
    var max = 0,
        min = Number.MAX_VALUE,
        val;

    for (var cc in values) {
        cc = cc.toLowerCase();
        val = parseFloat(values[cc]);

        if (isNaN(val)) {
            continue;
        }
        if (val > max) {
            max = values[cc];
        }
        if (val < min) {
            min = val;
        }
    }

    if (min === max) {
        max++;
    }

    this.colorScale.setMin(min);
    this.colorScale.setMax(max);

    var colors = {};
    for (cc in values) {
        cc = cc.toLowerCase();
        val = parseFloat(values[cc]);
        colors[cc] = isNaN(val) ? this.color : this.colorScale.getColor(val);
    }
    this.setColors(colors);
    this.values = values;
};
