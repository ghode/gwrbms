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

    'use strict';

    require('./AxisModel');

    require('../../echarts').extendComponentModel({

        type: 'polar',

        dependencies: ['polarAxis', 'angleAxis'],

        /**
         * @type {module:echarts/coord/polar/Polar}
         */
        coordinateSystem: null,

        /**
         * @param {string} axisType
         * @return {module:echarts/coord/polar/AxisModel}
         */
        findAxisModel: function (axisType) {
            var angleAxisModel;
            var ecModel = this.ecModel;
            ecModel.eachComponent(axisType, function (axisModel) {
                if (ecModel.getComponent(
                    'polar', axisModel.getShallow('polarIndex')
                ) === this) {
                    angleAxisModel = axisModel;
                }
            }, this);
            return angleAxisModel;
        },

        defaultOption: {

            zlevel: 0,

            z: 0,

            center: ['50%', '50%'],

            radius: '80%'
        }
    });
});
