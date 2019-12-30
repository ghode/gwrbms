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

    var quantile = require('./quantile');
    var numberUtil = require('echarts').number;

    /**
     * Helper method for preparing data.
     * @param {Array.<number>} rawData like
     *        [
     *            [12,232,443], (raw data set for the first box)
     *            [3843,5545,1232], (raw datat set for the second box)
     *            ...
     *        ]
     * @param {Object} [opt]
     *
     * @param {(number|string)} [opt.boundIQR=1.5] Data less than min bound is outlier.
     *                          default 1.5, means Q1 - 1.5 * (Q3 - Q1).
     *                          If pass 'none', min bound will not be used.
     * @param {(number|string)} [opt.layout='horizontal']
     *                          Box plot layout, can be 'horizontal' or 'vertical'
     */
    return function (rawData, opt) {
        opt = opt || [];
        var boxData = [];
        var outliers = [];
        var axisData = [];
        var boundIQR = opt.boundIQR;

        for (var i = 0; i < rawData.length; i++) {
            axisData.push(i + '');
            var ascList = numberUtil.asc(rawData[i].slice());

            var Q1 = quantile(ascList, 0.25);
            var Q2 = quantile(ascList, 0.5);
            var Q3 = quantile(ascList, 0.75);
            var IQR = Q3 - Q1;

            var low = boundIQR === 'none'
                ? ascList[0]
                : Q1 - (boundIQR == null ? 1.5 : boundIQR) * IQR;
            var high = boundIQR === 'none'
                ? ascList[ascList.length - 1]
                : Q3 + (boundIQR == null ? 1.5 : boundIQR) * IQR;

            boxData.push([low, Q1, Q2, Q3, high]);

            for (var j = 0; j < ascList.length; j++) {
                var dataItem = ascList[j];
                if (dataItem < low || dataItem > high) {
                    var outlier = [i, dataItem];
                    opt.layout === 'vertical' && outlier.reverse();
                    outliers.push(outlier);
                }
            }
        }
        return {
            boxData: boxData,
            outliers: outliers,
            axisData: axisData
        };
    };

});
