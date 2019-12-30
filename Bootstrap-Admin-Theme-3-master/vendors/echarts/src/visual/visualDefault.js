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

/**
 * @file Visual mapping.
 */
define(function (require) {

    var zrUtil = require('zrender/core/util');

    var visualDefault = {

        /**
         * @public
         */
        get: function (visualType, key, isCategory) {
            var value = zrUtil.clone(
                (defaultOption[visualType] || {})[key]
            );

            return isCategory
                ? (zrUtil.isArray(value) ? value[value.length - 1] : value)
                : value;
        }

    };

    var defaultOption = {

        color: {
            active: ['#006edd', '#e0ffff'],
            inactive: ['rgba(0,0,0,0)']
        },

        colorHue: {
            active: [0, 360],
            inactive: [0, 0]
        },

        colorSaturation: {
            active: [0.3, 1],
            inactive: [0, 0]
        },

        colorLightness: {
            active: [0.9, 0.5],
            inactive: [0, 0]
        },

        colorAlpha: {
            active: [0.3, 1],
            inactive: [0, 0]
        },

        opacity: {
            active: [0.3, 1],
            inactive: [0, 0]
        },

        symbol: {
            active: ['circle', 'roundRect', 'diamond'],
            inactive: ['none']
        },

        symbolSize: {
            active: [10, 50],
            inactive: [0, 0]
        }
    };

    return visualDefault;

});
