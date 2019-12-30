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

JQVMap.prototype.setColors = function (key, color) {
    if (typeof key === 'string') {
        this.countries[key].setFill(color);
        this.countries[key].setAttribute('original', color);
    } else {
        var colors = key;

        for (var code in colors) {
            if (this.countries[code]) {
                this.countries[code].setFill(colors[code]);
                this.countries[code].setAttribute('original', colors[code]);
            }
        }
    }
};
