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

    var history = require('../../dataZoom/history');

    function Restore(model) {
        this.model = model;
    }

    Restore.defaultOption = {
        show: true,
        icon: 'M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5',
        title: '还原'
    };

    var proto = Restore.prototype;

    proto.onclick = function (ecModel, api, type) {
        history.clear(ecModel);

        api.dispatchAction({
            type: 'restore',
            from: this.uid
        });
    };


    require('../featureManager').register('restore', Restore);


    require('../../../echarts').registerAction(
        {type: 'restore', event: 'restore', update: 'prepareAndUpdate'},
        function (payload, ecModel) {
            ecModel.resetOption('recreate');
        }
    );

    return Restore;
});
