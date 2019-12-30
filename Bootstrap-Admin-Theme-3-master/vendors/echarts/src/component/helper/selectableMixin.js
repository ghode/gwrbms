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

/**
 * Data selectable mixin for chart series.
 * To eanble data select, option of series must have `selectedMode`.
 * And each data item will use `selected` to toggle itself selected status
 *
 * @module echarts/chart/helper/DataSelectable
 */
define(function (require) {

    var zrUtil = require('zrender/core/util');

    return {

        updateSelectedMap: function (targetList) {
            this._selectTargetMap = zrUtil.reduce(targetList || [], function (targetMap, target) {
                targetMap[target.name] = target;
                return targetMap;
            }, {});
        },
        /**
         * @param {string} name
         */
        // PENGING If selectedMode is null ?
        select: function (name) {
            var targetMap = this._selectTargetMap;
            var target = targetMap[name];
            var selectedMode = this.get('selectedMode');
            if (selectedMode === 'single') {
                zrUtil.each(targetMap, function (target) {
                    target.selected = false;
                });
            }
            target && (target.selected = true);
        },

        /**
         * @param {string} name
         */
        unSelect: function (name) {
            var target = this._selectTargetMap[name];
            // var selectedMode = this.get('selectedMode');
            // selectedMode !== 'single' && target && (target.selected = false);
            target && (target.selected = false);
        },

        /**
         * @param {string} name
         */
        toggleSelected: function (name) {
            var target = this._selectTargetMap[name];
            if (target != null) {
                this[target.selected ? 'unSelect' : 'select'](name);
                return target.selected;
            }
        },

        /**
         * @param {string} name
         */
        isSelected: function (name) {
            var target = this._selectTargetMap[name];
            return target && target.selected;
        }
    };
});
