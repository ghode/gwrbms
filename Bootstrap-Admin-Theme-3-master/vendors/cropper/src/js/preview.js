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

initPreview: function () {
    var crossOrigin = getCrossOrigin(this.crossOrigin);
    var url = crossOrigin ? this.crossOriginUrl : this.url;
    var $clone2;

    this.$preview = $(this.options.preview);
    this.$clone2 = $clone2 = $('<img' + crossOrigin + ' src="' + url + '">');
    this.$viewBox.html($clone2);
    this.$preview.each(function () {
        var $this = $(this);

        // Save the original size for recover
        $this.data(DATA_PREVIEW, {
            width: $this.width(),
            height: $this.height(),
            html: $this.html()
        });

        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * (Occur only when margin-top <= -height)
         */
        $this.html(
            '<img' + crossOrigin + ' src="' + url + '" style="' +
            'display:block;width:100%;height:auto;' +
            'min-width:0!important;min-height:0!important;' +
            'max-width:none!important;max-height:none!important;' +
            'image-orientation:0deg!important;">'
        );
    });
}
,

resetPreview: function () {
    this.$preview.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_PREVIEW);

        $this.css({
            width: data.width,
            height: data.height
        }).html(data.html).removeData(DATA_PREVIEW);
    });
}
,

preview: function () {
    var image = this.image;
    var canvas = this.canvas;
    var cropBox = this.cropBox;
    var cropBoxWidth = cropBox.width;
    var cropBoxHeight = cropBox.height;
    var width = image.width;
    var height = image.height;
    var left = cropBox.left - canvas.left - image.left;
    var top = cropBox.top - canvas.top - image.top;

    if (!this.isCropped || this.isDisabled) {
        return;
    }

    this.$clone2.css({
        width: width,
        height: height,
        marginLeft: -left,
        marginTop: -top,
        transform: getTransform(image)
    });

    this.$preview.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
            ratio = originalWidth / cropBoxWidth;
            newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
            ratio = originalHeight / cropBoxHeight;
            newWidth = cropBoxWidth * ratio;
            newHeight = originalHeight;
        }

        $this.css({
            width: newWidth,
            height: newHeight
        }).find('img').css({
            width: width * ratio,
            height: height * ratio,
            marginLeft: -left * ratio,
            marginTop: -top * ratio,
            transform: getTransform(image)
        });
    });
}
,
