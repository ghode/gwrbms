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

/* eslint-disable */
/* global $, describe, it, xit, xdescribe, after, afterEach, expect*/

describe("flot symbol plugin", function () {
    var placeholder, plot;
    var options;

    beforeEach(function () {
        options = {
            series: {
                shadowSize: 0, // don't draw shadows
                lines: {show: false},
                points: {show: true, fill: false, symbol: 'circle'}
            }
        };

        placeholder = setFixtures('<div id="test-container" style="width: 600px;height: 400px">')
            .find('#test-container');
    });

    it('provides a list of draw symbols functions', function () {
        plot = $.plot(placeholder, [[]], options);
        expect(typeof plot.drawSymbol).toBe('object');
    })

    var shapes = ['square', 'rectangle', 'diamond', 'triangle', 'cross', 'ellipse', 'plus'];
    shapes.forEach(function (shape) {
        it('should provide a way to draw ' + shape + ' shapes', function () {
            plot = $.plot(placeholder, [[]], options);

            expect(typeof plot.drawSymbol[shape]).toBe('function')
        })
    })

    shapes.forEach(function (shape) {
        it('' + shape + ' method should be called when the point shape is ' + shape, function () {
            options.series.points.symbol = shape;
            plot = $.plot(placeholder, [[]], options);
            spyOn(plot.drawSymbol, shape).and.callThrough();

            plot.setData([[[0, 1], [1, 2]]]);
            plot.setupGrid(true);
            plot.draw();

            expect(plot.drawSymbol[shape]).toHaveBeenCalledTimes(2);
        });
    });
});
