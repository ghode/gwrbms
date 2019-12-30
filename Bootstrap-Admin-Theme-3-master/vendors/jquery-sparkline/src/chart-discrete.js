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
 * Discrete charts
 */
$.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
    type: 'discrete',

    init: function (el, values, options, width, height) {
        discrete._super.init.call(this, el, values, options, width, height);

        this.regionShapes = {};
        this.values = values = $.map(values, Number);
        this.min = Math.min.apply(Math, values);
        this.max = Math.max.apply(Math, values);
        this.range = this.max - this.min;
        this.width = width = options.get('width') === 'auto' ? values.length * 2 : this.width;
        this.interval = Math.floor(width / values.length);
        this.itemWidth = width / values.length;
        if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.min)) {
            this.min = options.get('chartRangeMin');
        }
        if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.max)) {
            this.max = options.get('chartRangeMax');
        }
        this.initTarget();
        if (this.target) {
            this.lineHeight = options.get('lineHeight') === 'auto' ? Math.round(this.canvasHeight * 0.3) : options.get('lineHeight');
        }
    },

    getRegion: function (el, x, y) {
        return Math.floor(x / this.itemWidth);
    },

    getCurrentRegionFields: function () {
        var currentRegion = this.currentRegion;
        return {
            isNull: this.values[currentRegion] === undefined,
            value: this.values[currentRegion],
            offset: currentRegion
        };
    },

    renderRegion: function (valuenum, highlight) {
        var values = this.values,
            options = this.options,
            min = this.min,
            max = this.max,
            range = this.range,
            interval = this.interval,
            target = this.target,
            canvasHeight = this.canvasHeight,
            lineHeight = this.lineHeight,
            pheight = canvasHeight - lineHeight,
            ytop, val, color, x;

        val = clipval(values[valuenum], min, max);
        x = valuenum * interval;
        ytop = Math.round(pheight - pheight * ((val - min) / range));
        color = (options.get('thresholdColor') && val < options.get('thresholdValue')) ? options.get('thresholdColor') : options.get('lineColor');
        if (highlight) {
            color = this.calcHighlightColor(color, options);
        }
        return target.drawLine(x, ytop, x, ytop + lineHeight, color);
    }
});

