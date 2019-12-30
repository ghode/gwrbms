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
 * Parallel coordinate system creater.
 */
define(function (require) {

    var Parallel = require('./Parallel');

    function create(ecModel, api) {
        var coordSysList = [];

        ecModel.eachComponent('parallel', function (parallelModel, idx) {
            var coordSys = new Parallel(parallelModel, ecModel, api);

            coordSys.name = 'parallel_' + idx;
            coordSys.resize(parallelModel, api);

            parallelModel.coordinateSystem = coordSys;
            coordSys.model = parallelModel;

            coordSysList.push(coordSys);
        });

        // Inject the coordinateSystems into seriesModel
        ecModel.eachSeries(function (seriesModel) {
            if (seriesModel.get('coordinateSystem') === 'parallel') {
                var parallelIndex = seriesModel.get('parallelIndex');
                seriesModel.coordinateSystem = coordSysList[parallelIndex];
            }
        });

        return coordSysList;
    }

    require('../../CoordinateSystem').register('parallel', {create: create});

});
