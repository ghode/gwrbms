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

    var modelUtil = require('../../util/model');
    var zrUtil = require('zrender/core/util');

    function fillLabel(opt) {
        modelUtil.defaultEmphasis(
            opt.label,
            modelUtil.LABEL_OPTIONS
        );
    }

    var MarkLineModel = require('../../echarts').extendComponentModel({

        type: 'markLine',

        dependencies: ['series', 'grid', 'polar', 'geo'],
        /**
         * @overrite
         */
        init: function (option, parentModel, ecModel, extraOpt) {
            this.mergeDefaultAndTheme(option, ecModel);
            this.mergeOption(option, ecModel, extraOpt.createdBySelf, true);
        },

        mergeOption: function (newOpt, ecModel, createdBySelf, isInit) {
            if (!createdBySelf) {
                ecModel.eachSeries(function (seriesModel) {
                    var markLineOpt = seriesModel.get('markLine');
                    var mlModel = seriesModel.markLineModel;
                    if (!markLineOpt || !markLineOpt.data) {
                        seriesModel.markLineModel = null;
                        return;
                    }
                    if (!mlModel) {
                        if (isInit) {
                            // Default label emphasis `position` and `show`
                            fillLabel(markLineOpt);
                        }
                        zrUtil.each(markLineOpt.data, function (item) {
                            if (item instanceof Array) {
                                fillLabel(item[0]);
                                fillLabel(item[1]);
                            } else {
                                fillLabel(item);
                            }
                        });
                        var opt = {
                            mainType: 'markLine',
                            // Use the same series index and name
                            seriesIndex: seriesModel.seriesIndex,
                            name: seriesModel.name,
                            createdBySelf: true
                        };
                        mlModel = new MarkLineModel(
                            markLineOpt, this, ecModel, opt
                        );
                    } else {
                        mlModel.mergeOption(markLineOpt, ecModel, true);
                    }
                    seriesModel.markLineModel = mlModel;
                }, this);
            }
        },

        defaultOption: {
            zlevel: 0,
            z: 5,

            symbol: ['circle', 'arrow'],
            symbolSize: [8, 16],

            //symbolRotate: 0,

            precision: 2,
            tooltip: {
                trigger: 'item'
            },
            label: {
                normal: {
                    show: true,
                    position: 'end'
                },
                emphasis: {
                    show: true
                }
            },
            lineStyle: {
                normal: {
                    type: 'dashed'
                },
                emphasis: {
                    width: 3
                }
            },
            animationEasing: 'linear'
        }
    });

    return MarkLineModel;
});
