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

    // var zrUtil = require('zrender/core/util');
    var coordinateSystemCreators = {};

    function CoordinateSystemManager() {

        this._coordinateSystems = [];
    }

    CoordinateSystemManager.prototype = {

        constructor: CoordinateSystemManager,

        create: function (ecModel, api) {
            var coordinateSystems = [];
            for (var type in coordinateSystemCreators) {
                var list = coordinateSystemCreators[type].create(ecModel, api);
                list && (coordinateSystems = coordinateSystems.concat(list));
            }

            this._coordinateSystems = coordinateSystems;
        },

        update: function (ecModel, api) {
            var coordinateSystems = this._coordinateSystems;
            for (var i = 0; i < coordinateSystems.length; i++) {
                // FIXME MUST have
                coordinateSystems[i].update && coordinateSystems[i].update(ecModel, api);
            }
        }
    };

    CoordinateSystemManager.register = function (type, coordinateSystemCreator) {
        coordinateSystemCreators[type] = coordinateSystemCreator;
    };

    CoordinateSystemManager.get = function (type) {
        return coordinateSystemCreators[type];
    };

    return CoordinateSystemManager;
});
