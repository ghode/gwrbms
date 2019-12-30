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
        ecModel.eachSeriesByType('graph', function (seriesModel) {
            var colorList = seriesModel.get('color');
            var categoriesData = seriesModel.getCategoriesData();
            var data = seriesModel.getData();

            var categoryNameIdxMap = {};

            categoriesData.each(function (idx) {
                categoryNameIdxMap[categoriesData.getName(idx)] = idx;

                var itemModel = categoriesData.getItemModel(idx);
                var rawIdx = categoriesData.getRawIndex(idx);
                var color = itemModel.get('itemStyle.normal.color')
                    || colorList[rawIdx % colorList.length];
                categoriesData.setItemVisual(idx, 'color', color);
            });

            // Assign category color to visual
            if (categoriesData.count()) {
                data.each(function (idx) {
                    var model = data.getItemModel(idx);
                    var category = model.getShallow('category');
                    if (category != null) {
                        if (typeof category === 'string') {
                            category = categoryNameIdxMap[category];
                        }
                        if (!data.getItemVisual(idx, 'color', true)) {
                            data.setItemVisual(
                                idx, 'color',
                                categoriesData.getItemVisual(category, 'color')
                            );
                        }
                    }
                });
            }
        });
    };
});
