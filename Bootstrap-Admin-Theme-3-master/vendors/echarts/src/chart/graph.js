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

    var echarts = require('../echarts');
    var zrUtil = require('zrender/core/util');

    require('./graph/GraphSeries');
    require('./graph/GraphView');

    require('./graph/roamAction');

    echarts.registerProcessor('filter', require('./graph/categoryFilter'));

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('../visual/symbol'), 'graph', 'circle', null
    ));
    echarts.registerVisualCoding('chart', require('./graph/categoryVisual'));
    echarts.registerVisualCoding('chart', require('./graph/edgeVisual'));

    echarts.registerLayout(require('./graph/simpleLayout'));
    echarts.registerLayout(require('./graph/circularLayout'));
    echarts.registerLayout(require('./graph/forceLayout'));

    // Graph view coordinate system
    echarts.registerCoordinateSystem('graphView', {
        create: require('./graph/createView')
    });
});
