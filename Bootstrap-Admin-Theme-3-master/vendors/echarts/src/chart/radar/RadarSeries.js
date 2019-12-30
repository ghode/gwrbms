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

    var SeriesModel = require('../../model/Series');
    var List = require('../../data/List');
    var completeDimensions = require('../../data/helper/completeDimensions');
    var zrUtil = require('zrender/core/util');

    var RadarSeries = SeriesModel.extend({

        type: 'series.radar',

        dependencies: ['radar'],


        // Overwrite
        init: function (option) {
            RadarSeries.superApply(this, 'init', arguments);

            // Enable legend selection for each data item
            // Use a function instead of direct access because data reference may changed
            this.legendDataProvider = function () {
                return this._dataBeforeProcessed;
            };
        },

        getInitialData: function (option, ecModel) {
            var data = option.data || [];
            var dimensions = completeDimensions(
                [], data, [], 'indicator_'
            );
            var list = new List(dimensions, this);
            list.initData(data);
            return list;
        },

        formatTooltip: function (dataIndex) {
            var value = this.getRawValue(dataIndex);
            var coordSys = this.coordinateSystem;
            var indicatorAxes = coordSys.getIndicatorAxes();
            return this._data.getName(dataIndex) + '<br />'
                + zrUtil.map(indicatorAxes, function (axis, idx) {
                    return axis.name + ' : ' + value[idx];
                }).join('<br />');
        },

        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'radar',
            legendHoverLink: true,
            radarIndex: 0,
            lineStyle: {
                normal: {
                    width: 2,
                    type: 'solid'
                }
            },
            label: {
                normal: {
                    position: 'top'
                }
            },
            // areaStyle: {
            // },
            // itemStyle: {}
            symbol: 'emptyCircle',
            symbolSize: 4
            // symbolRotate: null
        }
    });

    return RadarSeries;
});
