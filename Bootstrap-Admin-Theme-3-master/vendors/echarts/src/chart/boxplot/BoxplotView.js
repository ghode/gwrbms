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

    'use strict';

    var zrUtil = require('zrender/core/util');
    var ChartView = require('../../view/Chart');
    var graphic = require('../../util/graphic');
    var whiskerBoxCommon = require('../helper/whiskerBoxCommon');

    var BoxplotView = ChartView.extend({

        type: 'boxplot',

        getStyleUpdater: function () {
            return updateStyle;
        }
    });

    zrUtil.mixin(BoxplotView, whiskerBoxCommon.viewMixin, true);

    // Update common properties
    var normalStyleAccessPath = ['itemStyle', 'normal'];
    var emphasisStyleAccessPath = ['itemStyle', 'emphasis'];

    function updateStyle(itemGroup, data, idx) {
        var itemModel = data.getItemModel(idx);
        var normalItemStyleModel = itemModel.getModel(normalStyleAccessPath);
        var borderColor = data.getItemVisual(idx, 'color');

        // Exclude borderColor.
        var itemStyle = normalItemStyleModel.getItemStyle(['borderColor']);

        var whiskerEl = itemGroup.childAt(itemGroup.whiskerIndex);
        whiskerEl.style.set(itemStyle);
        whiskerEl.style.stroke = borderColor;
        whiskerEl.dirty();

        var bodyEl = itemGroup.childAt(itemGroup.bodyIndex);
        bodyEl.style.set(itemStyle);
        bodyEl.style.stroke = borderColor;
        bodyEl.dirty();

        var hoverStyle = itemModel.getModel(emphasisStyleAccessPath).getItemStyle();
        graphic.setHoverStyle(itemGroup, hoverStyle);
    }

    return BoxplotView;

});
