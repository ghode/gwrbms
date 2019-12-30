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

    var featureManager = require('./featureManager');
    var zrUtil = require('zrender/core/util');

    var ToolboxModel = require('../../echarts').extendComponentModel({

        type: 'toolbox',

        layoutMode: {
            type: 'box',
            ignoreSize: true
        },

        mergeDefaultAndTheme: function (option) {
            ToolboxModel.superApply(this, 'mergeDefaultAndTheme', arguments);

            zrUtil.each(this.option.feature, function (featureOpt, featureName) {
                var Feature = featureManager.get(featureName);
                Feature && zrUtil.merge(featureOpt, Feature.defaultOption);
            });
        },

        defaultOption: {

            show: true,

            z: 6,

            zlevel: 0,

            orient: 'horizontal',

            left: 'right',

            top: 'top',

            // right
            // bottom

            backgroundColor: 'transparent',

            borderColor: '#ccc',

            borderWidth: 0,

            padding: 5,

            itemSize: 15,

            itemGap: 8,

            showTitle: true,

            iconStyle: {
                normal: {
                    borderColor: '#666',
                    color: 'none'
                },
                emphasis: {
                    borderColor: '#3E98C5'
                }
            }
            // textStyle: {},

            // feature
        }
    });

    return ToolboxModel;
});
