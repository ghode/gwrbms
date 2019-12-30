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

    var zrUtil = require('zrender/core/util');
    var modelUtil = require('../../util/model');

    return function (option) {
        createParallelIfNeeded(option);
        mergeAxisOptionFromParallel(option);
    };

    /**
     * Create a parallel coordinate if not exists.
     * @inner
     */
    function createParallelIfNeeded(option) {
        if (option.parallel) {
            return;
        }

        var hasParallelSeries = false;

        zrUtil.each(option.series, function (seriesOpt) {
            if (seriesOpt && seriesOpt.type === 'parallel') {
                hasParallelSeries = true;
            }
        });

        if (hasParallelSeries) {
            option.parallel = [{}];
        }
    }

    /**
     * Merge aixs definition from parallel option (if exists) to axis option.
     * @inner
     */
    function mergeAxisOptionFromParallel(option) {
        var axes = modelUtil.normalizeToArray(option.parallelAxis);

        zrUtil.each(axes, function (axisOption) {
            if (!zrUtil.isObject(axisOption)) {
                return;
            }

            var parallelIndex = axisOption.parallelIndex || 0;
            var parallelOption = modelUtil.normalizeToArray(option.parallel)[parallelIndex];

            if (parallelOption && parallelOption.parallelAxisDefault) {
                zrUtil.merge(axisOption, parallelOption.parallelAxisDefault, false);
            }
        });
    }

});
