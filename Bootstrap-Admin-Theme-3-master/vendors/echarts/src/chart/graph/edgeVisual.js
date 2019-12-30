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

    function normalize(a) {
        if (!(a instanceof Array)) {
            a = [a, a];
        }
        return a;
    }

    return function (ecModel) {
        ecModel.eachSeriesByType('graph', function (seriesModel) {
            var edgeData = seriesModel.getEdgeData();
            var symbolType = normalize(seriesModel.get('edgeSymbol'));
            var symbolSize = normalize(seriesModel.get('edgeSymbolSize'));

            edgeData.setVisual('fromSymbol', symbolType && symbolType[0]);
            edgeData.setVisual('toSymbol', symbolType && symbolType[1]);
            edgeData.setVisual('fromSymbolSize', symbolSize && symbolSize[0]);
            edgeData.setVisual('toSymbolSize', symbolSize && symbolSize[1]);
            edgeData.setVisual('color', seriesModel.get('lineStyle.normal.color'));

            edgeData.each(function (idx) {
                var itemModel = edgeData.getItemModel(idx);
                var symbolType = normalize(itemModel.getShallow('symbol', true));
                var symbolSize = normalize(itemModel.getShallow('symbolSize', true));

                symbolType[0] && edgeData.setItemVisual(idx, 'fromSymbol', symbolType[0]);
                symbolType[1] && edgeData.setItemVisual(idx, 'toSymbol', symbolType[1]);
                symbolSize[0] && edgeData.setItemVisual(idx, 'fromSymbolSize', symbolSize[0]);
                symbolSize[1] && edgeData.setItemVisual(idx, 'toSymbolSize', symbolSize[1]);
            });
        });
    };
});
