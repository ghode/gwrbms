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

    return function (seriesType, ecModel, api) {
        ecModel.eachSeriesByType(seriesType, function (seriesModel) {
            var data = seriesModel.getData();
            var coordSys = seriesModel.coordinateSystem;

            if (coordSys) {
                var dims = coordSys.dimensions;
                data.each(dims, function (x, y, idx) {
                    var point;
                    if (!isNaN(x) && !isNaN(y)) {
                        point = coordSys.dataToPoint([x, y]);
                    } else {
                        // Also {Array.<number>}, not undefined to avoid if...else... statement
                        point = [NaN, NaN];
                    }

                    data.setItemLayout(idx, point);
                }, true);
            }
        });
    };
});
