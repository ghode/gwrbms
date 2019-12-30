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
        var legendModels = ecModel.findComponents({
            mainType: 'legend'
        });
        if (!legendModels || !legendModels.length) {
            return;
        }
        ecModel.eachSeriesByType('graph', function (graphSeries) {
            var categoriesData = graphSeries.getCategoriesData();
            var graph = graphSeries.getGraph();
            var data = graph.data;

            var categoryNames = categoriesData.mapArray(categoriesData.getName);

            data.filterSelf(function (idx) {
                var model = data.getItemModel(idx);
                var category = model.getShallow('category');
                if (category != null) {
                    if (typeof category === 'number') {
                        category = categoryNames[category];
                    }
                    // If in any legend component the status is not selected.
                    for (var i = 0; i < legendModels.length; i++) {
                        if (!legendModels[i].isSelected(category)) {
                            return false;
                        }
                    }
                }
                return true;
            });
        }, this);
    };
});
