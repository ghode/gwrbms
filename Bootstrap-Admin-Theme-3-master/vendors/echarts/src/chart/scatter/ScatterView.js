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

    var SymbolDraw = require('../helper/SymbolDraw');
    var LargeSymbolDraw = require('../helper/LargeSymbolDraw');

    require('../../echarts').extendChartView({

        type: 'scatter',

        init: function () {
            this._normalSymbolDraw = new SymbolDraw();
            this._largeSymbolDraw = new LargeSymbolDraw();
        },

        render: function (seriesModel, ecModel, api) {
            var data = seriesModel.getData();
            var largeSymbolDraw = this._largeSymbolDraw;
            var normalSymbolDraw = this._normalSymbolDraw;
            var group = this.group;

            var symbolDraw = seriesModel.get('large') && data.count() > seriesModel.get('largeThreshold')
                ? largeSymbolDraw : normalSymbolDraw;

            this._symbolDraw = symbolDraw;
            symbolDraw.updateData(data);
            group.add(symbolDraw.group);

            group.remove(
                symbolDraw === largeSymbolDraw
                    ? normalSymbolDraw.group : largeSymbolDraw.group
            );
        },

        updateLayout: function (seriesModel) {
            this._symbolDraw.updateLayout(seriesModel);
        },

        remove: function (ecModel, api) {
            this._symbolDraw && this._symbolDraw.remove(api, true);
        }
    });
});
