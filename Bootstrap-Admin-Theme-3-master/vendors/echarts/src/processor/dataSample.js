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

define(function () {
    var samplers = {
        average: function (frame) {
            var sum = 0;
            var count = 0;
            for (var i = 0; i < frame.length; i++) {
                if (!isNaN(frame[i])) {
                    sum += frame[i];
                    count++;
                }
            }
            // Return NaN if count is 0
            return count === 0 ? NaN : sum / count;
        },
        sum: function (frame) {
            var sum = 0;
            for (var i = 0; i < frame.length; i++) {
                // Ignore NaN
                sum += frame[i] || 0;
            }
            return sum;
        },
        max: function (frame) {
            var max = -Infinity;
            for (var i = 0; i < frame.length; i++) {
                frame[i] > max && (max = frame[i]);
            }
            return max;
        },
        min: function (frame) {
            var min = Infinity;
            for (var i = 0; i < frame.length; i++) {
                frame[i] < min && (min = frame[i]);
            }
            return min;
        },
        // TODO
        // Median
        nearest: function (frame) {
            return frame[0];
        }
    };

    var indexSampler = function (frame, value) {
        return Math.round(frame.length / 2);
    };
    return function (seriesType, ecModel, api) {
        ecModel.eachSeriesByType(seriesType, function (seriesModel) {
            var data = seriesModel.getData();
            var sampling = seriesModel.get('sampling');
            var coordSys = seriesModel.coordinateSystem;
            // Only cartesian2d support down sampling
            if (coordSys.type === 'cartesian2d' && sampling) {
                var baseAxis = coordSys.getBaseAxis();
                var valueAxis = coordSys.getOtherAxis(baseAxis);
                var extent = baseAxis.getExtent();
                // Coordinste system has been resized
                var size = extent[1] - extent[0];
                var rate = Math.round(data.count() / size);
                if (rate > 1) {
                    var sampler;
                    if (typeof sampling === 'string') {
                        sampler = samplers[sampling];
                    } else if (typeof sampling === 'function') {
                        sampler = sampling;
                    }
                    if (sampler) {
                        data = data.downSample(
                            valueAxis.dim, 1 / rate, sampler, indexSampler
                        );
                        seriesModel.setData(data);
                    }
                }
            }
        }, this);
    };
});
