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
    var Axis = require('../../coord/Axis');
    var axisHelper = require('../../coord/axisHelper');

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
    var TimelineAxis = function (dim, scale, coordExtent, axisType) {

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
         * @private
         * @type {number}
         */
        this._autoLabelInterval;

        /**
         * Axis model
         * @param {module:echarts/component/TimelineModel}
         */
        this.model = null;
    };

    TimelineAxis.prototype = {

        constructor: TimelineAxis,

        /**
         * @public
         * @return {number}
         */
        getLabelInterval: function () {
            var timelineModel = this.model;
            var labelModel = timelineModel.getModel('label.normal');
            var labelInterval = labelModel.get('interval');

            if (labelInterval != null && labelInterval != 'auto') {
                return labelInterval;
            }

            var labelInterval = this._autoLabelInterval;

            if (!labelInterval) {
                labelInterval = this._autoLabelInterval = axisHelper.getAxisLabelInterval(
                    zrUtil.map(this.scale.getTicks(), this.dataToCoord, this),
                    axisHelper.getFormattedLabels(this, labelModel.get('formatter')),
                    labelModel.getModel('textStyle').getFont(),
                    timelineModel.get('orient') === 'horizontal'
                );
            }

            return labelInterval;
        },

        /**
         * If label is ignored.
         * Automatically used when axis is category and label can not be all shown
         * @public
         * @param  {number} idx
         * @return {boolean}
         */
        isLabelIgnored: function (idx) {
            if (this.type === 'category') {
                var labelInterval = this.getLabelInterval();
                return ((typeof labelInterval === 'function')
                    && !labelInterval(idx, this.scale.getLabel(idx)))
                    || idx % (labelInterval + 1);
            }
        }

    };

    zrUtil.inherits(TimelineAxis, Axis);

    return TimelineAxis;
});
