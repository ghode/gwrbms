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

import {normalizeUnits} from '../units/aliases';
import absFloor from '../utils/abs-floor';

export function get (units) {
    units = normalizeUnits(units);
    return this[units + 's']();
}

function makeGetter(name) {
    return function () {
        return this._data[name];
    };
}

export var milliseconds = makeGetter('milliseconds');
export var seconds      = makeGetter('seconds');
export var minutes      = makeGetter('minutes');
export var hours        = makeGetter('hours');
export var days         = makeGetter('days');
export var months       = makeGetter('months');
export var years        = makeGetter('years');

export function weeks () {
    return absFloor(this.days() / 7);
}
