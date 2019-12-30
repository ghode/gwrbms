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

describe('util/graphic', function () {

    var utHelper = window.utHelper;
    var graphic;

    beforeAll(function (done) { // jshint ignore:line
        utHelper.resetPackageLoader(function () {
            window.require(['echarts/util/graphic'], function (g) {
                graphic = g;
                done();
            });
        });
    });

    describe('subPixelOptimize', function () {

        it('subPixelOptimize_base', function (done) {
            expect(graphic.subPixelOptimize(5, 1)).toEqual(4.5);
            expect(graphic.subPixelOptimize(5, 2)).toEqual(5);
            expect(graphic.subPixelOptimize(5, 43)).toEqual(4.5);
            expect(graphic.subPixelOptimize(7.5, 1)).toEqual(7.5);
            expect(graphic.subPixelOptimize(7.5, 2)).toEqual(7);
            expect(graphic.subPixelOptimize(14, 1, true)).toEqual(14.5);
            expect(graphic.subPixelOptimize(14, 2, true)).toEqual(14);
            expect(graphic.subPixelOptimize(-11, 1)).toEqual(-11.5);
            expect(graphic.subPixelOptimize(-11, 2)).toEqual(-11);
            expect(graphic.subPixelOptimize(0, 2)).toEqual(0);
            expect(graphic.subPixelOptimize(0, 1)).toEqual(-0.5);
            expect(graphic.subPixelOptimize(5, 0)).toEqual(5);
            done();
        });

        it('subPixelOptimize_line', function (done) {
            function doSubPixelOptimizeLine(x, y, width, height, lineWidth) {
                return graphic.subPixelOptimizeLine(makeParam(x, y, width, height, lineWidth));
            }

            function makeParam(x1, y1, x2, y2, lineWidth) {
                return {
                    shape: {x1: x1, y1: y1, x2: x2, y2: y2},
                    style: {lineWidth: lineWidth}
                };
            }

            expect(doSubPixelOptimizeLine(5, 11, 3, 7, 1)).toEqual(makeParam(5, 11, 3, 7, 1));
            expect(doSubPixelOptimizeLine(5, 11, 5, 7, 1)).toEqual(makeParam(5.5, 11, 5.5, 7, 1));
            expect(doSubPixelOptimizeLine(5, 11, 5, 7, 2)).toEqual(makeParam(5, 11, 5, 7, 2));
            expect(doSubPixelOptimizeLine(5, 11, 15, 11, 1)).toEqual(makeParam(5, 11.5, 15, 11.5, 1));
            expect(doSubPixelOptimizeLine(5, 11, 15, 11, 2)).toEqual(makeParam(5, 11, 15, 11, 2));
            expect(doSubPixelOptimizeLine(5, 11, 15, 11, 3)).toEqual(makeParam(5, 11.5, 15, 11.5, 3));
            expect(doSubPixelOptimizeLine(5, 11, 15, 11.5, 3)).toEqual(makeParam(5, 11, 15, 11.5, 3));
            expect(doSubPixelOptimizeLine(5, 11.5, 15, 11.5, 3)).toEqual(makeParam(5, 11.5, 15, 11.5, 3));
            expect(doSubPixelOptimizeLine(5, 11.5, 15, 11.5, 4)).toEqual(makeParam(5, 12, 15, 12, 4));
            done();
        });

        it('subPixelOptimize_rect', function (done) {
            function doSubPixelOptimizeRect(x, y, width, height, lineWidth) {
                return graphic.subPixelOptimizeRect(makeParam(x, y, width, height, lineWidth));
            }

            function makeParam(x, y, width, height, lineWidth) {
                return {
                    shape: {x: x, y: y, width: width, height: height},
                    style: {lineWidth: lineWidth}
                };
            }

            expect(doSubPixelOptimizeRect(5, 11, 3, 7, 1)).toEqual(makeParam(5.5, 11.5, 2, 6, 1));
            expect(doSubPixelOptimizeRect(5, 11, 3, 7, 2)).toEqual(makeParam(5, 11, 3, 7, 2));
            expect(doSubPixelOptimizeRect(5, 11, 3, 7, 3)).toEqual(makeParam(5.5, 11.5, 2, 6, 3));
            // Boundary value tests
            expect(doSubPixelOptimizeRect(5, 11, 1, 7, 1)).toEqual(makeParam(5.5, 11.5, 1, 6, 1));
            expect(doSubPixelOptimizeRect(5, 11, 1, 0, 1)).toEqual(makeParam(5.5, 11.5, 1, 0, 1));
            done();
        });

    });

});
