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

    return function (ecModel) {
        ecModel.eachSeriesByType('lines', function (seriesModel) {
            var coordSys = seriesModel.coordinateSystem;
            var fromData = seriesModel.fromData;
            var toData = seriesModel.toData;
            var lineData = seriesModel.getData();

            var dims = coordSys.dimensions;
            fromData.each(dims, function (x, y, idx) {
                fromData.setItemLayout(idx, coordSys.dataToPoint([x, y]));
            });
            toData.each(dims, function (x, y, idx) {
                toData.setItemLayout(idx, coordSys.dataToPoint([x, y]));
            });
            lineData.each(function (idx) {
                var p1 = fromData.getItemLayout(idx);
                var p2 = toData.getItemLayout(idx);
                var curveness = lineData.getItemModel(idx).get('lineStyle.normal.curveness');
                var cp1;
                if (curveness > 0) {
                    cp1 = [
                        (p1[0] + p2[0]) / 2 - (p1[1] - p2[1]) * curveness,
                        (p1[1] + p2[1]) / 2 - (p2[0] - p1[0]) * curveness
                    ];
                }
                lineData.setItemLayout(idx, [p1, p2, cp1]);
            });
        });
    };
});
