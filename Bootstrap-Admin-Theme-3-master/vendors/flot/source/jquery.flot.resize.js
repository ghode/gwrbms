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
(function ($, e, t) {
    "$:nomunge";
    var i = [], n = $.resize = $.extend($.resize, {}), a, r = false,
        s = "setTimeout", u = "resize", m = u + "-special-event",
        o = "pendingDelay", l = "activeDelay", f = "throttleWindow";
    n[o] = 200;
    n[l] = 20;
    n[f] = true;
    $.event.special[u] = {
        setup: function () {
            if (!n[f] && this[s]) {
                return false
            }
            var e = $(this);
            i.push(this);
            e.data(m, {w: e.width(), h: e.height()});
            if (i.length === 1) {
                a = t;
                h()
            }
        }, teardown: function () {
            if (!n[f] && this[s]) {
                return false
            }
            var e = $(this);
            for (var t = i.length - 1; t >= 0; t--) {
                if (i[t] == this) {
                    i.splice(t, 1);
                    break
                }
            }
            e.removeData(m);
            if (!i.length) {
                if (r) {
                    cancelAnimationFrame(a)
                } else {
                    clearTimeout(a)
                }
                a = null
            }
        }, add: function (e) {
            if (!n[f] && this[s]) {
                return false
            }
            var i;

            function a(e, n, a) {
                var r = $(this), s = r.data(m) || {};
                s.w = n !== t ? n : r.width();
                s.h = a !== t ? a : r.height();
                i.apply(this, arguments)
            }

            if ($.isFunction(e)) {
                i = e;
                return a
            } else {
                i = e.handler;
                e.handler = a
            }
        }
    };

    function h(t) {
        if (r === true) {
            r = t || 1
        }
        for (var s = i.length - 1; s >= 0; s--) {
            var l = $(i[s]);
            if (l[0] == e || l.is(":visible")) {
                var f = l.width(), c = l.height(), d = l.data(m);
                if (d && (f !== d.w || c !== d.h)) {
                    l.trigger(u, [d.w = f, d.h = c]);
                    r = t || true
                }
            } else {
                d = l.data(m);
                d.w = 0;
                d.h = 0
            }
        }
        if (a !== null) {
            if (r && (t == null || t - r < 1e3)) {
                a = e.requestAnimationFrame(h)
            } else {
                a = setTimeout(h, n[o]);
                r = false
            }
        }
    }

    if (!e.requestAnimationFrame) {
        e.requestAnimationFrame = function () {
            return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t, i) {
                return e.setTimeout(function () {
                    t((new Date).getTime())
                }, n[l])
            }
        }()
    }
    if (!e.cancelAnimationFrame) {
        e.cancelAnimationFrame = function () {
            return e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
        }()
    }
})(jQuery, this);

/* eslint-enable */
(function ($) {
    var options = {}; // no options

    function init(plot) {
        function onResize() {
            var placeholder = plot.getPlaceholder();

            // somebody might have hidden us and we can't plot
            // when we don't have the dimensions
            if (placeholder.width() === 0 || placeholder.height() === 0) return;

            plot.resize();
            plot.setupGrid();
            plot.draw();
        }

        function bindEvents(plot, eventHolder) {
            plot.getPlaceholder().resize(onResize);
        }

        function shutdown(plot, eventHolder) {
            plot.getPlaceholder().unbind("resize", onResize);
        }

        plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown);
    }

    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'resize',
        version: '1.0'
    });
})(jQuery);
