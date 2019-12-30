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

    var zrUtil = require('zrender/core/util');
    var Axis = require('../Axis');

    /**
     * @constructor module:echarts/coord/parallel/ParallelAxis
     * @extends {module:echarts/coord/Axis}
     * @param {string} dim
     * @param {*} scale
     * @param {Array.<number>} coordExtent
     * @param {string} axisType
     */
    var ParallelAxis = function (dim, scale, coordExtent, axisType, axisIndex) {

        Axis.call(this, dim, scale, coordExtent);

        /**
         * Axis type
         *  - 'category'
         *  - 'value'
         *  - 'time'
         *  - 'log'
         * @type {string}
         */
        this.type = axisType || 'value';

        /**
         * @type {number}
         * @readOnly
         */
        this.axisIndex = axisIndex;
    };

    ParallelAxis.prototype = {

        constructor: ParallelAxis,

        /**
         * Axis model
         * @param {module:echarts/coord/parallel/AxisModel}
         */
        model: null

    };

    zrUtil.inherits(ParallelAxis, Axis);

    return ParallelAxis;
});
