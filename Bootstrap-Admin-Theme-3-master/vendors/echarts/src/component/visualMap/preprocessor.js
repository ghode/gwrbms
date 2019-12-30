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
 * @file VisualMap preprocessor
 */
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var each = zrUtil.each;

    return function (option) {
        var visualMap = option && option.visualMap;

        if (!zrUtil.isArray(visualMap)) {
            visualMap = visualMap ? [visualMap] : [];
        }

        each(visualMap, function (opt) {
            if (!opt) {
                return;
            }

            // rename splitList to pieces
            if (has(opt, 'splitList') && !has(opt, 'pieces')) {
                opt.pieces = opt.splitList;
                delete opt.splitList;
            }

            var pieces = opt.pieces;
            if (pieces && zrUtil.isArray(pieces)) {
                each(pieces, function (piece) {
                    if (zrUtil.isObject(piece)) {
                        if (has(piece, 'start') && !has(piece, 'min')) {
                            piece.min = piece.start;
                        }
                        if (has(piece, 'end') && !has(piece, 'max')) {
                            piece.max = piece.end;
                        }
                    }
                });
            }
        });
    };

    function has(obj, name) {
        return obj && obj.hasOwnProperty && obj.hasOwnProperty(name);
    }

});
