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

    var echarts = require('../../echarts');
    var roamHelper = require('../../action/roamHelper');

    var actionInfo = {
        type: 'graphRoam',
        event: 'graphRoam',
        update: 'none'
    };

    /**
     * @payload
     * @property {string} name Series name
     * @property {number} [dx]
     * @property {number} [dy]
     * @property {number} [zoom]
     * @property {number} [originX]
     * @property {number} [originY]
     */

    echarts.registerAction(actionInfo, function (payload, ecModel) {
        ecModel.eachComponent({
            mainType: 'series',
            query: payload
        }, function (seriesModel) {
            var coordSys = seriesModel.coordinateSystem;

            var res = roamHelper.updateCenterAndZoom(coordSys, payload);

            seriesModel.setCenter
            && seriesModel.setCenter(res.center);

            seriesModel.setZoom
            && seriesModel.setZoom(res.zoom);
        });
    });
});
