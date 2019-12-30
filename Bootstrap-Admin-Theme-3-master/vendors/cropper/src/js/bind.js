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

bind: function () {
    var options = this.options;
    var $this = this.$element;
    var $cropper = this.$cropper;

    if ($.isFunction(options.cropstart)) {
        $this.on(EVENT_CROP_START, options.cropstart);
    }

    if ($.isFunction(options.cropmove)) {
        $this.on(EVENT_CROP_MOVE, options.cropmove);
    }

    if ($.isFunction(options.cropend)) {
        $this.on(EVENT_CROP_END, options.cropend);
    }

    if ($.isFunction(options.crop)) {
        $this.on(EVENT_CROP, options.crop);
    }

    if ($.isFunction(options.zoom)) {
        $this.on(EVENT_ZOOM, options.zoom);
    }

    $cropper.on(EVENT_MOUSE_DOWN, $.proxy(this.cropStart, this));

    if (options.zoomable && options.zoomOnWheel) {
        $cropper.on(EVENT_WHEEL, $.proxy(this.wheel, this));
    }

    if (options.toggleDragModeOnDblclick) {
        $cropper.on(EVENT_DBLCLICK, $.proxy(this.dblclick, this));
    }

    $document.on(EVENT_MOUSE_MOVE, (this._cropMove = proxy(this.cropMove, this))).on(EVENT_MOUSE_UP, (this._cropEnd = proxy(this.cropEnd, this)));

    if (options.responsive) {
        $window.on(EVENT_RESIZE, (this._resize = proxy(this.resize, this)));
    }
}
,

unbind: function () {
    var options = this.options;
    var $this = this.$element;
    var $cropper = this.$cropper;

    if ($.isFunction(options.cropstart)) {
        $this.off(EVENT_CROP_START, options.cropstart);
    }

    if ($.isFunction(options.cropmove)) {
        $this.off(EVENT_CROP_MOVE, options.cropmove);
    }

    if ($.isFunction(options.cropend)) {
        $this.off(EVENT_CROP_END, options.cropend);
    }

    if ($.isFunction(options.crop)) {
        $this.off(EVENT_CROP, options.crop);
    }

    if ($.isFunction(options.zoom)) {
        $this.off(EVENT_ZOOM, options.zoom);
    }

    $cropper.off(EVENT_MOUSE_DOWN, this.cropStart);

    if (options.zoomable && options.zoomOnWheel) {
        $cropper.off(EVENT_WHEEL, this.wheel);
    }

    if (options.toggleDragModeOnDblclick) {
        $cropper.off(EVENT_DBLCLICK, this.dblclick);
    }

    $document.off(EVENT_MOUSE_MOVE, this._cropMove).off(EVENT_MOUSE_UP, this._cropEnd);

    if (options.responsive) {
        $window.off(EVENT_RESIZE, this._resize);
    }
}
,
