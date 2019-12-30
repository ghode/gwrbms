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

// Backward compat for radar chart in 2
define(function (require) {

    var zrUtil = require('zrender/core/util');

    return function (option) {
        var polarOptArr = option.polar;
        if (polarOptArr) {
            if (!zrUtil.isArray(polarOptArr)) {
                polarOptArr = [polarOptArr];
            }
            var polarNotRadar = [];
            zrUtil.each(polarOptArr, function (polarOpt, idx) {
                if (polarOpt.indicator) {
                    if (polarOpt.type && !polarOpt.shape) {
                        polarOpt.shape = polarOpt.type;
                    }
                    option.radar = option.radar || [];
                    if (!zrUtil.isArray(option.radar)) {
                        option.radar = [option.radar];
                    }
                    option.radar.push(polarOpt);
                } else {
                    polarNotRadar.push(polarOpt);
                }
            });
            option.polar = polarNotRadar;
        }
        zrUtil.each(option.series, function (seriesOpt) {
            if (seriesOpt.type === 'radar' && seriesOpt.polarIndex) {
                seriesOpt.radarIndex = seriesOpt.polarIndex;
            }
        });
    };
});
