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
    var echarts = require('../echarts');
    var zrUtil = require('zrender/core/util');
    return function (seriesType, actionInfos) {
        zrUtil.each(actionInfos, function (actionInfo) {
            actionInfo.update = 'updateView';
            /**
             * @payload
             * @property {string} seriesName
             * @property {string} name
             */
            echarts.registerAction(actionInfo, function (payload, ecModel) {
                var selected = {};
                ecModel.eachComponent(
                    {mainType: 'series', subType: seriesType, query: payload},
                    function (seriesModel) {
                        if (seriesModel[actionInfo.method]) {
                            seriesModel[actionInfo.method](payload.name);
                        }
                        var data = seriesModel.getData();
                        // Create selected map
                        data.each(function (idx) {
                            var name = data.getName(idx);
                            selected[name] = seriesModel.isSelected(name) || false;
                        });
                    }
                );
                return {
                    name: payload.name,
                    selected: selected
                };
            });
        });
    };
});
