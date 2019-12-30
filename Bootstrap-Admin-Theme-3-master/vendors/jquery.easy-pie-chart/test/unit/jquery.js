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

describe('Unit testing jQuery version of easy pie chart', function () {
    var $el;

    var createInstance = function (options, el) {
        options = options || {};
        el = el || '<span class="chart"></span>';
        return function () {
            $el = $(el);
            $('body').append($el);
            $el.easyPieChart(options);
        };
    };

    describe('initialize plugin', function () {
        beforeEach(createInstance());

        it('should insert a canvas element', function () {
            expect($el.html()).toContain('canvas');
        });
    });


    describe('takes size option and', function () {
        var $canvas;
        beforeEach(createInstance({
            size: 200
        }));

        beforeEach(function () {
            $canvas = $el.find('canvas');
        });

        it('set correct width', function () {
            expect($canvas.width()).toBe(200);
        });

        it('set correct height', function () {
            expect($canvas.height()).toBe(200);
        });
    });

    describe('options should be overwritable by data attributes', function () {
        var $canvas;
        beforeEach(createInstance({
            size: 200
        }, '<span class="chart" data-size="400"></span>'));

        beforeEach(function () {
            $canvas = $el.find('canvas');
        });

        it('overwrite width', function () {
            expect($canvas.width()).toBe(400);
        });

        it('overwrite height', function () {
            expect($canvas.height()).toBe(400);
        });
    });

});
