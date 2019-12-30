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

    var borderColorQuery = ['itemStyle', 'normal', 'borderColor'];

    return function (ecModel, api) {

        var globalColors = ecModel.get('color');

        ecModel.eachRawSeriesByType('boxplot', function (seriesModel) {

            var defaulColor = globalColors[seriesModel.seriesIndex % globalColors.length];
            var data = seriesModel.getData();

            data.setVisual({
                legendSymbol: 'roundRect',
                // Use name 'color' but not 'borderColor' for legend usage and
                // visual coding from other component like dataRange.
                color: seriesModel.get(borderColorQuery) || defaulColor
            });

            // Only visible series has each data be visual encoded
            if (!ecModel.isSeriesFiltered(seriesModel)) {
                data.each(function (idx) {
                    var itemModel = data.getItemModel(idx);
                    data.setItemVisual(
                        idx,
                        {color: itemModel.get(borderColorQuery, true)}
                    );
                });
            }
        });

    };
});
