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

    var zrUtil = require('zrender/core/util');
    var SeriesModel = require('../../model/Series');
    var whiskerBoxCommon = require('../helper/whiskerBoxCommon');
    var formatUtil = require('../../util/format');
    var encodeHTML = formatUtil.encodeHTML;
    var addCommas = formatUtil.addCommas;

    var CandlestickSeries = SeriesModel.extend({

        type: 'series.candlestick',

        dependencies: ['xAxis', 'yAxis', 'grid'],

        /**
         * @readOnly
         */
        valueDimensions: ['open', 'close', 'lowest', 'highest'],

        /**
         * @type {Array.<string>}
         * @readOnly
         */
        dimensions: null,

        /**
         * @override
         */
        defaultOption: {
            zlevel: 0,                  // 一级层叠
            z: 2,                       // 二级层叠
            coordinateSystem: 'cartesian2d',
            legendHoverLink: true,

            hoverAnimation: true,

            xAxisIndex: 0,
            yAxisIndex: 0,

            layout: null, // 'horizontal' or 'vertical'

            itemStyle: {
                normal: {
                    color: '#c23531', // 阳线 positive
                    color0: '#314656', // 阴线 negative     '#c23531', '#314656'
                    borderWidth: 1,
                    // FIXME
                    // ec2中使用的是lineStyle.color 和 lineStyle.color0
                    borderColor: '#c23531',
                    borderColor0: '#314656'
                },
                emphasis: {
                    borderWidth: 2
                }
            },

            animationUpdate: false,
            animationEasing: 'linear',
            animationDuration: 300
        },

        /**
         * Get dimension for shadow in dataZoom
         * @return {string} dimension name
         */
        getShadowDim: function () {
            return 'open';
        },

        /**
         * @override
         */
        formatTooltip: function (dataIndex, mutipleSeries) {
            // It rearly use mutiple candlestick series in one cartesian,
            // so only consider one series in this default tooltip.
            var valueHTMLArr = zrUtil.map(this.valueDimensions, function (dim) {
                return dim + ': ' + addCommas(this._data.get(dim, dataIndex));
            }, this);

            return encodeHTML(this.name) + '<br />' + valueHTMLArr.join('<br />');
        }

    });

    zrUtil.mixin(CandlestickSeries, whiskerBoxCommon.seriesModelMixin, true);

    return CandlestickSeries;

});
