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

    return require('zrender/graphic/Path').extend({

        type: 'echartsGaugePointer',

        shape: {
            angle: 0,

            width: 10,

            r: 10,

            x: 0,

            y: 0
        },

        buildPath: function (ctx, shape) {
            var mathCos = Math.cos;
            var mathSin = Math.sin;

            var r = shape.r;
            var width = shape.width;
            var angle = shape.angle;
            var x = shape.x - mathCos(angle) * width * (width >= r / 3 ? 1 : 2);
            var y = shape.y - mathSin(angle) * width * (width >= r / 3 ? 1 : 2);

            angle = shape.angle - Math.PI / 2;
            ctx.moveTo(x, y);
            ctx.lineTo(
                shape.x + mathCos(angle) * width,
                shape.y + mathSin(angle) * width
            );
            ctx.lineTo(
                shape.x + mathCos(shape.angle) * r,
                shape.y + mathSin(shape.angle) * r
            );
            ctx.lineTo(
                shape.x - mathCos(angle) * width,
                shape.y - mathSin(angle) * width
            );
            ctx.lineTo(x, y);
            return;
        }
    });
});
