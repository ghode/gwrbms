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

// Save the other cropper
Cropper.other = $.fn.cropper;

// Register as jQuery plugin
$.fn.cropper = function (option) {
    var args = toArray(arguments, 1);
    var result;

    this.each(function () {
        var $this = $(this);
        var data = $this.data(NAMESPACE);
        var options;
        var fn;

        if (!data) {
            if (/destroy/.test(option)) {
                return;
            }

            options = $.extend({}, $this.data(), $.isPlainObject(option) && option);
            $this.data(NAMESPACE, (data = new Cropper(this, options)));
        }

        if (typeof option === 'string' && $.isFunction(fn = data[option])) {
            result = fn.apply(data, args);
        }
    });

    return isUndefined(result) ? this : result;
};

$.fn.cropper.Constructor = Cropper;
$.fn.cropper.setDefaults = Cropper.setDefaults;

// No conflict
$.fn.cropper.noConflict = function () {
    $.fn.cropper = Cropper.other;
    return this;
};
