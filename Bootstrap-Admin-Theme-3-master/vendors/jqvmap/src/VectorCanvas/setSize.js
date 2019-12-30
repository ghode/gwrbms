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

VectorCanvas.prototype.setSize = function (width, height) {
    if (this.mode === 'svg') {
        this.canvas.setAttribute('width', width);
        this.canvas.setAttribute('height', height);
    } else {
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
        this.canvas.coordsize = width + ' ' + height;
        this.canvas.coordorigin = '0 0';
        if (this.rootGroup) {
            var paths = this.rootGroup.getElementsByTagName('shape');
            for (var i = 0, l = paths.length; i < l; i++) {
                paths[i].coordsize = width + ' ' + height;
                paths[i].style.width = width + 'px';
                paths[i].style.height = height + 'px';
            }
            this.rootGroup.coordsize = width + ' ' + height;
            this.rootGroup.style.width = width + 'px';
            this.rootGroup.style.height = height + 'px';
        }
    }
    this.width = width;
    this.height = height;
};
