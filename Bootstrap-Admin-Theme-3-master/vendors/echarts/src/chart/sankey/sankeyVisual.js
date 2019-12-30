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

    var VisualMapping = require('../../visual/VisualMapping');

    return function (ecModel, payload) {
        ecModel.eachSeriesByType('sankey', function (seriesModel) {
            var graph = seriesModel.getGraph();
            var nodes = graph.nodes;

            nodes.sort(function (a, b) {
                return a.getLayout().value - b.getLayout().value;
            });

            var minValue = nodes[0].getLayout().value;
            var maxValue = nodes[nodes.length - 1].getLayout().value;

            nodes.forEach(function (node) {
                var mapping = new VisualMapping({
                    type: 'color',
                    mappingMethod: 'linear',
                    dataExtent: [minValue, maxValue],
                    visual: seriesModel.get('color')
                });

                var mapValueToColor = mapping.mapValueToVisual(node.getLayout().value);
                node.setVisual('color', mapValueToColor);
                // If set itemStyle.normal.color
                var itemModel = node.getModel();
                var customColor = itemModel.get('itemStyle.normal.color');
                if (customColor != null) {
                    node.setVisual('color', customColor);
                }
            });

        });
    };
});
