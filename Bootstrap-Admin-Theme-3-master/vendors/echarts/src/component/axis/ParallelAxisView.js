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
    var AxisBuilder = require('./AxisBuilder');
    var SelectController = require('../helper/SelectController');

    var elementList = ['axisLine', 'axisLabel', 'axisTick', 'axisName'];

    var AxisView = require('../../echarts').extendComponentView({

        type: 'parallelAxis',

        /**
         * @type {module:echarts/component/helper/SelectController}
         */
        _selectController: null,

        /**
         * @override
         */
        render: function (axisModel, ecModel, api, payload) {
            if (fromAxisAreaSelect(axisModel, ecModel, payload)) {
                return;
            }

            this.axisModel = axisModel;
            this.api = api;

            this.group.removeAll();

            if (!axisModel.get('show')) {
                return;
            }

            var coordSys = ecModel.getComponent(
                'parallel', axisModel.get('parallelIndex')
            ).coordinateSystem;

            var areaSelectStyle = axisModel.getAreaSelectStyle();
            var areaWidth = areaSelectStyle.width;

            var axisLayout = coordSys.getAxisLayout(axisModel.axis.dim);
            var builderOpt = zrUtil.extend(
                {
                    strokeContainThreshold: areaWidth,
                    // lineWidth === 0 or no value.
                    axisLineSilent: !(areaWidth > 0) // jshint ignore:line
                },
                axisLayout
            );

            var axisBuilder = new AxisBuilder(axisModel, builderOpt);

            zrUtil.each(elementList, axisBuilder.add, axisBuilder);

            var axisGroup = axisBuilder.getGroup();

            this.group.add(axisGroup);

            this._buildSelectController(
                axisGroup, areaSelectStyle, axisModel, api
            );
        },

        _buildSelectController: function (axisGroup, areaSelectStyle, axisModel, api) {

            var axis = axisModel.axis;
            var selectController = this._selectController;

            if (!selectController) {
                selectController = this._selectController = new SelectController(
                    'line',
                    api.getZr(),
                    areaSelectStyle
                );

                selectController.on('selected', zrUtil.bind(this._onSelected, this));
            }

            selectController.enable(axisGroup);

            // After filtering, axis may change, select area needs to be update.
            var ranges = zrUtil.map(axisModel.activeIntervals, function (interval) {
                return [
                    axis.dataToCoord(interval[0], true),
                    axis.dataToCoord(interval[1], true)
                ];
            });
            selectController.update(ranges);
        },

        _onSelected: function (ranges) {
            // Do not cache these object, because the mey be changed.
            var axisModel = this.axisModel;
            var axis = axisModel.axis;

            var intervals = zrUtil.map(ranges, function (range) {
                return [
                    axis.coordToData(range[0], true),
                    axis.coordToData(range[1], true)
                ];
            });
            this.api.dispatchAction({
                type: 'axisAreaSelect',
                parallelAxisId: axisModel.id,
                intervals: intervals
            });
        },

        /**
         * @override
         */
        remove: function () {
            this._selectController && this._selectController.disable();
        },

        /**
         * @override
         */
        dispose: function () {
            if (this._selectController) {
                this._selectController.dispose();
                this._selectController = null;
            }
        }
    });

    function fromAxisAreaSelect(axisModel, ecModel, payload) {
        return payload
            && payload.type === 'axisAreaSelect'
            && ecModel.findComponents(
                {mainType: 'parallelAxis', query: payload}
            )[0] === axisModel;
    }

    return AxisView;
});
