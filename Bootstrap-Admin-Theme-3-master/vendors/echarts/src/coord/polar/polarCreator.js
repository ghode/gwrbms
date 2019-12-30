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

// TODO Axis scale
define(function (require) {

    var Polar = require('./Polar');
    var numberUtil = require('../../util/number');

    var axisHelper = require('../../coord/axisHelper');
    var niceScaleExtent = axisHelper.niceScaleExtent;

    // 依赖 PolarModel 做预处理
    require('./PolarModel');

    /**
     * Resize method bound to the polar
     * @param {module:echarts/coord/polar/PolarModel} polarModel
     * @param {module:echarts/ExtensionAPI} api
     */
    function resizePolar(polarModel, api) {
        var center = polarModel.get('center');
        var radius = polarModel.get('radius');
        var width = api.getWidth();
        var height = api.getHeight();
        var parsePercent = numberUtil.parsePercent;

        this.cx = parsePercent(center[0], width);
        this.cy = parsePercent(center[1], height);

        var radiusAxis = this.getRadiusAxis();
        var size = Math.min(width, height) / 2;
        // var idx = radiusAxis.inverse ? 1 : 0;
        radiusAxis.setExtent(0, parsePercent(radius, size));
    }

    /**
     * Update polar
     */
    function updatePolarScale(ecModel, api) {
        var polar = this;
        var angleAxis = polar.getAngleAxis();
        var radiusAxis = polar.getRadiusAxis();
        // Reset scale
        angleAxis.scale.setExtent(Infinity, -Infinity);
        radiusAxis.scale.setExtent(Infinity, -Infinity);

        ecModel.eachSeries(function (seriesModel) {
            if (seriesModel.coordinateSystem === polar) {
                var data = seriesModel.getData();
                radiusAxis.scale.unionExtent(
                    data.getDataExtent('radius', radiusAxis.type !== 'category')
                );
                angleAxis.scale.unionExtent(
                    data.getDataExtent('angle', angleAxis.type !== 'category')
                );
            }
        });

        niceScaleExtent(angleAxis, angleAxis.model);
        niceScaleExtent(radiusAxis, radiusAxis.model);

        // Fix extent of category angle axis
        if (angleAxis.type === 'category' && !angleAxis.onBand) {
            var extent = angleAxis.getExtent();
            var diff = 360 / angleAxis.scale.count();
            angleAxis.inverse ? (extent[1] += diff) : (extent[1] -= diff);
            angleAxis.setExtent(extent[0], extent[1]);
        }
    }

    /**
     * Set common axis properties
     * @param {module:echarts/coord/polar/AngleAxis|module:echarts/coord/polar/RadiusAxis}
     * @param {module:echarts/coord/polar/AxisModel}
     * @inner
     */
    function setAxis(axis, axisModel) {
        axis.type = axisModel.get('type');
        axis.scale = axisHelper.createScaleByModel(axisModel);
        axis.onBand = axisModel.get('boundaryGap') && axis.type === 'category';

        // FIXME Radius axis not support inverse axis
        if (axisModel.mainType === 'angleAxis') {
            var startAngle = axisModel.get('startAngle');
            axis.inverse = axisModel.get('inverse') ^ axisModel.get('clockwise');
            axis.setExtent(startAngle, startAngle + (axis.inverse ? -360 : 360));
        }

        // Inject axis instance
        axisModel.axis = axis;
        axis.model = axisModel;
    }


    var polarCreator = {

        dimensions: Polar.prototype.dimensions,

        create: function (ecModel, api) {
            var polarList = [];
            ecModel.eachComponent('polar', function (polarModel, idx) {
                var polar = new Polar(idx);
                // Inject resize and update method
                polar.resize = resizePolar;
                polar.update = updatePolarScale;

                var radiusAxis = polar.getRadiusAxis();
                var angleAxis = polar.getAngleAxis();

                var radiusAxisModel = polarModel.findAxisModel('radiusAxis');
                var angleAxisModel = polarModel.findAxisModel('angleAxis');

                setAxis(radiusAxis, radiusAxisModel);
                setAxis(angleAxis, angleAxisModel);

                polar.resize(polarModel, api);
                polarList.push(polar);

                polarModel.coordinateSystem = polar;
            });
            // Inject coordinateSystem to series
            ecModel.eachSeries(function (seriesModel) {
                if (seriesModel.get('coordinateSystem') === 'polar') {
                    seriesModel.coordinateSystem = polarList[seriesModel.get('polarIndex')];
                }
            });

            return polarList;
        }
    };

    require('../../CoordinateSystem').register('polar', polarCreator);
});
