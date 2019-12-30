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

    // var zrUtil = require('zrender/core/util');
    var graphic = require('../../util/graphic');

    var MapDraw = require('../../component/helper/MapDraw');

    require('../../echarts').extendChartView({

        type: 'map',

        render: function (mapModel, ecModel, api, payload) {
            // Not render if it is an toggleSelect action from self
            if (payload && payload.type === 'mapToggleSelect'
                && payload.from === this.uid
            ) {
                return;
            }

            var group = this.group;
            group.removeAll();
            // Not update map if it is an roam action from self
            if (!(payload && payload.type === 'geoRoam'
                && payload.component === 'series'
                && payload.name === mapModel.name)) {

                if (mapModel.needsDrawMap) {
                    var mapDraw = this._mapDraw || new MapDraw(api, true);
                    group.add(mapDraw.group);

                    mapDraw.draw(mapModel, ecModel, api, this, payload);

                    this._mapDraw = mapDraw;
                } else {
                    // Remove drawed map
                    this._mapDraw && this._mapDraw.remove();
                    this._mapDraw = null;
                }
            } else {
                var mapDraw = this._mapDraw;
                mapDraw && group.add(mapDraw.group);
            }

            mapModel.get('showLegendSymbol') && ecModel.getComponent('legend')
            && this._renderSymbols(mapModel, ecModel, api);
        },

        remove: function () {
            this._mapDraw && this._mapDraw.remove();
            this._mapDraw = null;
            this.group.removeAll();
        },

        _renderSymbols: function (mapModel, ecModel, api) {
            var data = mapModel.getData();
            var group = this.group;

            data.each('value', function (value, idx) {
                if (isNaN(value)) {
                    return;
                }

                var layout = data.getItemLayout(idx);

                if (!layout || !layout.point) {
                    // Not exists in map
                    return;
                }

                var point = layout.point;
                var offset = layout.offset;

                var circle = new graphic.Circle({
                    style: {
                        fill: data.getVisual('color')
                    },
                    shape: {
                        cx: point[0] + offset * 9,
                        cy: point[1],
                        r: 3
                    },
                    silent: true,
                    z2: 10
                });

                // First data on the same region
                if (!offset) {
                    var labelText = data.getName(idx);

                    var itemModel = data.getItemModel(idx);
                    var labelModel = itemModel.getModel('label.normal');
                    var hoverLabelModel = itemModel.getModel('label.emphasis');

                    var textStyleModel = labelModel.getModel('textStyle');
                    var hoverTextStyleModel = hoverLabelModel.getModel('textStyle');

                    var polygonGroups = data.getItemGraphicEl(idx);
                    circle.setStyle({
                        textPosition: 'bottom'
                    });

                    var onEmphasis = function () {
                        circle.setStyle({
                            text: hoverLabelModel.get('show') ? labelText : '',
                            textFill: hoverTextStyleModel.getTextColor(),
                            textFont: hoverTextStyleModel.getFont()
                        });
                    };

                    var onNormal = function () {
                        circle.setStyle({
                            text: labelModel.get('show') ? labelText : '',
                            textFill: textStyleModel.getTextColor(),
                            textFont: textStyleModel.getFont()
                        });
                    };

                    polygonGroups.on('mouseover', onEmphasis)
                        .on('mouseout', onNormal)
                        .on('emphasis', onEmphasis)
                        .on('normal', onNormal);

                    onNormal();
                }

                group.add(circle);
            });
        }
    });
});
