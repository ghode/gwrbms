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

    var ComponentModel = require('../../model/Component');
    var axisModelCreator = require('../axisModelCreator');
    var zrUtil = require('zrender/core/util');

    var AxisModel = ComponentModel.extend({

        type: 'singleAxis',

        layoutMode: 'box',

        /**
         * @type {module:echarts/coord/single/SingleAxis}
         */
        axis: null,

        /**
         * @type {module:echarts/coord/single/Single}
         */
        coordinateSystem: null

    });

    var defaultOption = {

        left: '5%',
        top: '5%',
        right: '5%',
        bottom: '5%',

        type: 'value',

        position: 'bottom',

        orient: 'horizontal',
        // singleIndex: 0,

        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                type: 'solid'
            }
        },

        axisTick: {
            show: true,
            length: 6,
            lineStyle: {
                width: 2
            }
        },

        axisLabel: {
            show: true,
            interval: 'auto'
        },

        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                opacity: 0.2
            }
        }
    };

    function getAxisType(axisName, option) {
        return option.type || (option.data ? 'category' : 'value');
    }

    zrUtil.merge(AxisModel.prototype, require('../axisModelCommonMixin'));

    axisModelCreator('single', AxisModel, getAxisType, defaultOption);

    return AxisModel;
});
