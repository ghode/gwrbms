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
 * @module echarts/chart/helper/SymbolDraw
 */
define(function (require) {

    var graphic = require('../../util/graphic');
    var Symbol = require('./Symbol');

    /**
     * @constructor
     * @alias module:echarts/chart/helper/SymbolDraw
     * @param {module:zrender/graphic/Group} [symbolCtor]
     */
    function SymbolDraw(symbolCtor) {
        this.group = new graphic.Group();

        this._symbolCtor = symbolCtor || Symbol;
    }

    var symbolDrawProto = SymbolDraw.prototype;

    function symbolNeedsDraw(data, idx, isIgnore) {
        var point = data.getItemLayout(idx);
        return point && !isNaN(point[0]) && !isNaN(point[1]) && !(isIgnore && isIgnore(idx))
            && data.getItemVisual(idx, 'symbol') !== 'none';
    }

    /**
     * Update symbols draw by new data
     * @param {module:echarts/data/List} data
     * @param {Array.<boolean>} [isIgnore]
     */
    symbolDrawProto.updateData = function (data, isIgnore) {
        var group = this.group;
        var seriesModel = data.hostModel;
        var oldData = this._data;

        var SymbolCtor = this._symbolCtor;

        data.diff(oldData)
            .add(function (newIdx) {
                var point = data.getItemLayout(newIdx);
                if (symbolNeedsDraw(data, newIdx, isIgnore)) {
                    var symbolEl = new SymbolCtor(data, newIdx);
                    symbolEl.attr('position', point);
                    data.setItemGraphicEl(newIdx, symbolEl);
                    group.add(symbolEl);
                }
            })
            .update(function (newIdx, oldIdx) {
                var symbolEl = oldData.getItemGraphicEl(oldIdx);
                var point = data.getItemLayout(newIdx);
                if (!symbolNeedsDraw(data, newIdx, isIgnore)) {
                    group.remove(symbolEl);
                    return;
                }
                if (!symbolEl) {
                    symbolEl = new SymbolCtor(data, newIdx);
                    symbolEl.attr('position', point);
                } else {
                    symbolEl.updateData(data, newIdx);
                    graphic.updateProps(symbolEl, {
                        position: point
                    }, seriesModel);
                }

                // Add back
                group.add(symbolEl);

                data.setItemGraphicEl(newIdx, symbolEl);
            })
            .remove(function (oldIdx) {
                var el = oldData.getItemGraphicEl(oldIdx);
                el && el.fadeOut(function () {
                    group.remove(el);
                });
            })
            .execute();

        this._data = data;
    };

    symbolDrawProto.updateLayout = function () {
        var data = this._data;
        if (data) {
            // Not use animation
            data.eachItemGraphicEl(function (el, idx) {
                el.attr('position', data.getItemLayout(idx));
            });
        }
    };

    symbolDrawProto.remove = function (enableAnimation) {
        var group = this.group;
        var data = this._data;
        if (data) {
            if (enableAnimation) {
                data.eachItemGraphicEl(function (el) {
                    el.fadeOut(function () {
                        group.remove(el);
                    });
                });
            } else {
                group.removeAll();
            }
        }
    };

    return SymbolDraw;
});
