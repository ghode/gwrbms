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

    var axisDefault = require('./axisDefault');
    var zrUtil = require('zrender/core/util');
    var ComponentModel = require('../model/Component');
    var layout = require('../util/layout');

    // FIXME axisType is fixed ?
    var AXIS_TYPES = ['value', 'category', 'time', 'log'];

    /**
     * Generate sub axis model class
     * @param {string} axisName 'x' 'y' 'radius' 'angle' 'parallel'
     * @param {module:echarts/model/Component} BaseAxisModelClass
     * @param {Function} axisTypeDefaulter
     * @param {Object} [extraDefaultOption]
     */
    return function (axisName, BaseAxisModelClass, axisTypeDefaulter, extraDefaultOption) {

        zrUtil.each(AXIS_TYPES, function (axisType) {

            BaseAxisModelClass.extend({

                type: axisName + 'Axis.' + axisType,

                mergeDefaultAndTheme: function (option, ecModel) {
                    var layoutMode = this.layoutMode;
                    var inputPositionParams = layoutMode
                        ? layout.getLayoutParams(option) : {};

                    var themeModel = ecModel.getTheme();
                    zrUtil.merge(option, themeModel.get(axisType + 'Axis'));
                    zrUtil.merge(option, this.getDefaultOption());

                    option.type = axisTypeDefaulter(axisName, option);

                    if (layoutMode) {
                        layout.mergeLayoutParam(option, inputPositionParams, layoutMode);
                    }
                },

                defaultOption: zrUtil.mergeAll(
                    [
                        {},
                        axisDefault[axisType + 'Axis'],
                        extraDefaultOption
                    ],
                    true
                )
            });
        });

        ComponentModel.registerSubTypeDefaulter(
            axisName + 'Axis',
            zrUtil.curry(axisTypeDefaulter, axisName)
        );
    };
});
