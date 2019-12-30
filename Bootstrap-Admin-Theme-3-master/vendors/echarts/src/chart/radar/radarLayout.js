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

    return function (ecModel, api) {
        ecModel.eachSeriesByType('radar', function (seriesModel) {
            var data = seriesModel.getData();
            var points = [];
            var coordSys = seriesModel.coordinateSystem;
            if (!coordSys) {
                return;
            }

            function pointsConverter(val, idx) {
                points[idx] = points[idx] || [];
                points[idx][i] = coordSys.dataToPoint(val, i);
            }

            for (var i = 0; i < coordSys.getIndicatorAxes().length; i++) {
                var dim = data.dimensions[i];
                data.each(dim, pointsConverter);
            }

            data.each(function (idx) {
                // Close polygon
                points[idx][0] && points[idx].push(points[idx][0].slice());
                data.setItemLayout(idx, points[idx]);
            });
        });
    };
});
