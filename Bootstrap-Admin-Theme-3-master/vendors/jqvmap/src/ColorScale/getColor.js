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

ColorScale.prototype.getColor = function (value) {
    if (typeof this.normalize === 'function') {
        value = this.normalize(value);
    }

    var lengthes = [];
    var fullLength = 0;
    var l;

    for (var i = 0; i < this.colors.length - 1; i++) {
        l = this.vectorLength(this.vectorSubtract(this.colors[i + 1], this.colors[i]));
        lengthes.push(l);
        fullLength += l;
    }

    var c = (this.maxValue - this.minValue) / fullLength;

    for (i = 0; i < lengthes.length; i++) {
        lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;

    while (value - lengthes[i] >= 0) {
        value -= lengthes[i];
        i++;
    }

    var color;
    if (i === this.colors.length - 1) {
        color = this.vectorToNum(this.colors[i]).toString(16);
    } else {
        color = (this.vectorToNum(this.vectorAdd(this.colors[i], this.vectorMult(this.vectorSubtract(this.colors[i + 1], this.colors[i]), (value) / (lengthes[i]))))).toString(16);
    }

    while (color.length < 6) {
        color = '0' + color;
    }
    return '#' + color;
};
