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

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');

    require('./pie/PieSeries');
    require('./pie/PieView');

    require('../action/createDataSelectAction')('pie', [{
        type: 'pieToggleSelect',
        event: 'pieselectchanged',
        method: 'toggleSelected'
    }, {
        type: 'pieSelect',
        event: 'pieselected',
        method: 'select'
    }, {
        type: 'pieUnSelect',
        event: 'pieunselected',
        method: 'unSelect'
    }]);

    echarts.registerVisualCoding(
        'chart', zrUtil.curry(require('../visual/dataColor'), 'pie')
    );

    echarts.registerLayout(zrUtil.curry(
        require('./pie/pieLayout'), 'pie'
    ));

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('../processor/dataFilter'), 'pie')
    );
});