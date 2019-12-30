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
 * @module echarts/chart/helper/LineDraw
 */
define(function (require) {

    var graphic = require('../../util/graphic');
    var LineGroup = require('./Line');


    function isPointNaN(pt) {
        return isNaN(pt[0]) || isNaN(pt[1]);
    }

    function lineNeedsDraw(pts) {
        return !isPointNaN(pts[0]) && !isPointNaN(pts[1]);
    }

    /**
     * @alias module:echarts/component/marker/LineDraw
     * @constructor
     */
    function LineDraw(ctor) {
        this._ctor = ctor || LineGroup;
        this.group = new graphic.Group();
    }

    var lineDrawProto = LineDraw.prototype;

    /**
     * @param {module:echarts/data/List} lineData
     */
    lineDrawProto.updateData = function (lineData) {

        var oldLineData = this._lineData;
        var group = this.group;
        var LineCtor = this._ctor;

        lineData.diff(oldLineData)
            .add(function (idx) {
                if (!lineNeedsDraw(lineData.getItemLayout(idx))) {
                    return;
                }
                var lineGroup = new LineCtor(lineData, idx);

                lineData.setItemGraphicEl(idx, lineGroup);

                group.add(lineGroup);
            })
            .update(function (newIdx, oldIdx) {
                var lineGroup = oldLineData.getItemGraphicEl(oldIdx);
                if (!lineNeedsDraw(lineData.getItemLayout(newIdx))) {
                    group.remove(lineGroup);
                    return;
                }

                if (!lineGroup) {
                    lineGroup = new LineCtor(lineData, newIdx);
                } else {
                    lineGroup.updateData(lineData, newIdx);
                }

                lineData.setItemGraphicEl(newIdx, lineGroup);

                group.add(lineGroup);
            })
            .remove(function (idx) {
                group.remove(oldLineData.getItemGraphicEl(idx));
            })
            .execute();

        this._lineData = lineData;
    };

    lineDrawProto.updateLayout = function () {
        var lineData = this._lineData;
        lineData.eachItemGraphicEl(function (el, idx) {
            el.updateLayout(lineData, idx);
        }, this);
    };

    lineDrawProto.remove = function () {
        this.group.removeAll();
    };

    return LineDraw;
});
