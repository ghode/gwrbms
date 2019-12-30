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

// Provide a cross-browser interface to a few simple drawing primitives
$.fn.simpledraw = function (width, height, useExisting, interact) {
    var target, mhandler;
    if (useExisting && (target = this.data('_jqs_vcanvas'))) {
        return target;
    }

    if ($.fn.sparkline.canvas === false) {
        // We've already determined that neither Canvas nor VML are available
        return false;

    } else if ($.fn.sparkline.canvas === undefined) {
        // No function defined yet -- need to see if we support Canvas or VML
        var el = document.createElement('canvas');
        if (!!(el.getContext && el.getContext('2d'))) {
            // Canvas is available
            $.fn.sparkline.canvas = function (width, height, target, interact) {
                return new VCanvas_canvas(width, height, target, interact);
            };
        } else if (document.namespaces && !document.namespaces.v) {
            // VML is available
            document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
            $.fn.sparkline.canvas = function (width, height, target, interact) {
                return new VCanvas_vml(width, height, target);
            };
        } else {
            // Neither Canvas nor VML are available
            $.fn.sparkline.canvas = false;
            return false;
        }
    }

    if (width === undefined) {
        width = $(this).innerWidth();
    }
    if (height === undefined) {
        height = $(this).innerHeight();
    }

    target = $.fn.sparkline.canvas(width, height, this, interact);

    mhandler = $(this).data('_jqs_mhandler');
    if (mhandler) {
        mhandler.registerCanvas(target);
    }
    return target;
};

$.fn.cleardraw = function () {
    var target = this.data('_jqs_vcanvas');
    if (target) {
        target.reset();
    }
};

