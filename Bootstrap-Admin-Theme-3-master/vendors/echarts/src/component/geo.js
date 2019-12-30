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

    require('../coord/geo/GeoModel');

    require('../coord/geo/geoCreator');

    require('./geo/GeoView');

    require('../action/geoRoam');

    var echarts = require('../echarts');
    var zrUtil = require('zrender/core/util');

    function makeAction(method, actionInfo) {
        actionInfo.update = 'updateView';
        echarts.registerAction(actionInfo, function (payload, ecModel) {
            var selected = {};

            ecModel.eachComponent(
                {mainType: 'geo', query: payload},
                function (geoModel) {
                    geoModel[method](payload.name);
                    var geo = geoModel.coordinateSystem;
                    zrUtil.each(geo.regions, function (region) {
                        selected[region.name] = geoModel.isSelected(region.name) || false;
                    });
                }
            );

            return {
                selected: selected,
                name: payload.name
            }
        });
    }

    makeAction('toggleSelected', {
        type: 'geoToggleSelect',
        event: 'geoselectchanged'
    });
    makeAction('select', {
        type: 'geoSelect',
        event: 'geoselected'
    });
    makeAction('unSelect', {
        type: 'geoUnSelect',
        event: 'geounselected'
    });
});
