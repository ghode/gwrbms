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
    'use strict';

    var zrUtil = require('zrender/core/util');
    var Axis = require('../Axis');

    function AngleAxis(scale, angleExtent) {

        angleExtent = angleExtent || [0, 360];

        Axis.call(this, 'angle', scale, angleExtent);

        /**
         * Axis type
         *  - 'category'
         *  - 'value'
         *  - 'time'
         *  - 'log'
         * @type {string}
         */
        this.type = 'category';
    }

    AngleAxis.prototype = {

        constructor: AngleAxis,

        dataToAngle: Axis.prototype.dataToCoord,

        angleToData: Axis.prototype.coordToData
    };

    zrUtil.inherits(AngleAxis, Axis);

    return AngleAxis;
});
