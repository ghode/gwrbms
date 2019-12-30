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
 * Tristate charts
 */
$.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
    type: 'tristate',

    init: function (el, values, options, width, height) {
        var barWidth = parseInt(options.get('barWidth'), 10),
            barSpacing = parseInt(options.get('barSpacing'), 10);
        tristate._super.init.call(this, el, values, options, width, height);

        this.regionShapes = {};
        this.barWidth = barWidth;
        this.barSpacing = barSpacing;
        this.totalBarWidth = barWidth + barSpacing;
        this.values = $.map(values, Number);
        this.width = width = (values.length * barWidth) + ((values.length - 1) * barSpacing);

        if ($.isArray(options.get('colorMap'))) {
            this.colorMapByIndex = options.get('colorMap');
            this.colorMapByValue = null;
        } else {
            this.colorMapByIndex = null;
            this.colorMapByValue = options.get('colorMap');
            if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
                this.colorMapByValue = new RangeMap(this.colorMapByValue);
            }
        }
        this.initTarget();
    },

    getRegion: function (el, x, y) {
        return Math.floor(x / this.totalBarWidth);
    },

    getCurrentRegionFields: function () {
        var currentRegion = this.currentRegion;
        return {
            isNull: this.values[currentRegion] === undefined,
            value: this.values[currentRegion],
            color: this.calcColor(this.values[currentRegion], currentRegion),
            offset: currentRegion
        };
    },

    calcColor: function (value, valuenum) {
        var values = this.values,
            options = this.options,
            colorMapByIndex = this.colorMapByIndex,
            colorMapByValue = this.colorMapByValue,
            color, newColor;

        if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
            color = newColor;
        } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
            color = colorMapByIndex[valuenum];
        } else if (values[valuenum] < 0) {
            color = options.get('negBarColor');
        } else if (values[valuenum] > 0) {
            color = options.get('posBarColor');
        } else {
            color = options.get('zeroBarColor');
        }
        return color;
    },

    renderRegion: function (valuenum, highlight) {
        var values = this.values,
            options = this.options,
            target = this.target,
            canvasHeight, height, halfHeight,
            x, y, color;

        canvasHeight = target.pixelHeight;
        halfHeight = Math.round(canvasHeight / 2);

        x = valuenum * this.totalBarWidth;
        if (values[valuenum] < 0) {
            y = halfHeight;
            height = halfHeight - 1;
        } else if (values[valuenum] > 0) {
            y = 0;
            height = halfHeight - 1;
        } else {
            y = halfHeight - 1;
            height = 2;
        }
        color = this.calcColor(values[valuenum], valuenum);
        if (color === null) {
            return;
        }
        if (highlight) {
            color = this.calcHighlightColor(color, options);
        }
        return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color);
    }
});

