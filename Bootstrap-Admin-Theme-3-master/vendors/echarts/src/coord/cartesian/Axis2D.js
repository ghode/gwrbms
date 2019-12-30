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
    var axisLabelInterval = require('./axisLabelInterval');

    /**
     * Extend axis 2d
     * @constructor module:echarts/coord/cartesian/Axis2D
     * @extends {module:echarts/coord/cartesian/Axis}
     * @param {string} dim
     * @param {*} scale
     * @param {Array.<number>} coordExtent
     * @param {string} axisType
     * @param {string} position
     */
    var Axis2D = function (dim, scale, coordExtent, axisType, position) {
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
         * Axis position
         *  - 'top'
         *  - 'bottom'
         *  - 'left'
         *  - 'right'
         */
        this.position = position || 'bottom';
    };

    Axis2D.prototype = {

        constructor: Axis2D,

        /**
         * Index of axis, can be used as key
         */
        index: 0,
        /**
         * If axis is on the zero position of the other axis
         * @type {boolean}
         */
        onZero: false,

        /**
         * Axis model
         * @param {module:echarts/coord/cartesian/AxisModel}
         */
        model: null,

        isHorizontal: function () {
            var position = this.position;
            return position === 'top' || position === 'bottom';
        },

        getGlobalExtent: function () {
            var ret = this.getExtent();
            ret[0] = this.toGlobalCoord(ret[0]);
            ret[1] = this.toGlobalCoord(ret[1]);
            return ret;
        },

        /**
         * @return {number}
         */
        getLabelInterval: function () {
            var labelInterval = this._labelInterval;
            if (!labelInterval) {
                labelInterval = this._labelInterval = axisLabelInterval(this);
            }
            return labelInterval;
        },

        /**
         * If label is ignored.
         * Automatically used when axis is category and label can not be all shown
         * @param  {number}  idx
         * @return {boolean}
         */
        isLabelIgnored: function (idx) {
            if (this.type === 'category') {
                var labelInterval = this.getLabelInterval();
                return ((typeof labelInterval === 'function')
                    && !labelInterval(idx, this.scale.getLabel(idx)))
                    || idx % (labelInterval + 1);
            }
        },

        /**
         * Transform global coord to local coord,
         * i.e. var localCoord = axis.toLocalCoord(80);
         * designate by module:echarts/coord/cartesian/Grid.
         * @type {Function}
         */
        toLocalCoord: null,

        /**
         * Transform global coord to local coord,
         * i.e. var globalCoord = axis.toLocalCoord(40);
         * designate by module:echarts/coord/cartesian/Grid.
         * @type {Function}
         */
        toGlobalCoord: null

    };
    zrUtil.inherits(Axis2D, Axis);

    return Axis2D;
});
