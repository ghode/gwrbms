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
 * Cartesian coordinate system
 * @module  echarts/coord/Cartesian
 *
 */
define(function (require) {

    'use strict';

    var zrUtil = require('zrender/core/util');

    function dimAxisMapper(dim) {
        return this._axes[dim];
    }

    /**
     * @alias module:echarts/coord/Cartesian
     * @constructor
     */
    var Cartesian = function (name) {
        this._axes = {};

        this._dimList = [];

        /**
         * @type {string}
         */
        this.name = name || '';
    };

    Cartesian.prototype = {

        constructor: Cartesian,

        type: 'cartesian',

        /**
         * Get axis
         * @param  {number|string} dim
         * @return {module:echarts/coord/Cartesian~Axis}
         */
        getAxis: function (dim) {
            return this._axes[dim];
        },

        /**
         * Get axes list
         * @return {Array.<module:echarts/coord/Cartesian~Axis>}
         */
        getAxes: function () {
            return zrUtil.map(this._dimList, dimAxisMapper, this);
        },

        /**
         * Get axes list by given scale type
         */
        getAxesByScale: function (scaleType) {
            scaleType = scaleType.toLowerCase();
            return zrUtil.filter(
                this.getAxes(),
                function (axis) {
                    return axis.scale.type === scaleType;
                }
            );
        },

        /**
         * Add axis
         * @param {module:echarts/coord/Cartesian.Axis}
         */
        addAxis: function (axis) {
            var dim = axis.dim;

            this._axes[dim] = axis;

            this._dimList.push(dim);
        },

        /**
         * Convert data to coord in nd space
         * @param {Array.<number>|Object.<string, number>} val
         * @return {Array.<number>|Object.<string, number>}
         */
        dataToCoord: function (val) {
            return this._dataCoordConvert(val, 'dataToCoord');
        },

        /**
         * Convert coord in nd space to data
         * @param  {Array.<number>|Object.<string, number>} val
         * @return {Array.<number>|Object.<string, number>}
         */
        coordToData: function (val) {
            return this._dataCoordConvert(val, 'coordToData');
        },

        _dataCoordConvert: function (input, method) {
            var dimList = this._dimList;

            var output = input instanceof Array ? [] : {};

            for (var i = 0; i < dimList.length; i++) {
                var dim = dimList[i];
                var axis = this._axes[dim];

                output[dim] = axis[method](input[dim]);
            }

            return output;
        }
    };

    return Cartesian;
});
