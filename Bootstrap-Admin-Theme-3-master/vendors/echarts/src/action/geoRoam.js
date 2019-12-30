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
    var roamHelper = require('./roamHelper');

    var echarts = require('../echarts');

    /**
     * @payload
     * @property {string} [componentType=series]
     * @property {number} [dx]
     * @property {number} [dy]
     * @property {number} [zoom]
     * @property {number} [originX]
     * @property {number} [originY]
     */
    echarts.registerAction({
        type: 'geoRoam',
        event: 'geoRoam',
        update: 'updateLayout'
    }, function (payload, ecModel) {
        var componentType = payload.componentType || 'series';

        ecModel.eachComponent(
            {mainType: componentType, query: payload},
            function (componentModel) {
                var geo = componentModel.coordinateSystem;
                if (geo.type !== 'geo') {
                    return;
                }

                var res = roamHelper.updateCenterAndZoom(
                    geo, payload, componentModel.get('scaleLimit')
                );

                componentModel.setCenter
                && componentModel.setCenter(res.center);

                componentModel.setZoom
                && componentModel.setZoom(res.zoom);

                // All map series with same `map` use the same geo coordinate system
                // So the center and zoom must be in sync. Include the series not selected by legend
                if (componentType === 'series') {
                    zrUtil.each(componentModel.seriesGroup, function (seriesModel) {
                        seriesModel.setCenter(res.center);
                        seriesModel.setZoom(res.zoom);
                    });
                }
            }
        );
    });
});
