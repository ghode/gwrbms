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

VectorCanvas.prototype.createPath = function (config) {
    var node;
    if (this.mode === 'svg') {
        node = this.createSvgNode('path');
        node.setAttribute('d', config.path);

        if (this.params.borderColor !== null) {
            node.setAttribute('stroke', this.params.borderColor);
        }
        if (this.params.borderWidth > 0) {
            node.setAttribute('stroke-width', this.params.borderWidth);
            node.setAttribute('stroke-linecap', 'round');
            node.setAttribute('stroke-linejoin', 'round');
        }
        if (this.params.borderOpacity > 0) {
            node.setAttribute('stroke-opacity', this.params.borderOpacity);
        }

        node.setFill = function (color) {
            this.setAttribute('fill', color);
            if (this.getAttribute('original') === null) {
                this.setAttribute('original', color);
            }
        };

        node.getFill = function () {
            return this.getAttribute('fill');
        };

        node.getOriginalFill = function () {
            return this.getAttribute('original');
        };

        node.setOpacity = function (opacity) {
            this.setAttribute('fill-opacity', opacity);
        };
    } else {
        node = this.createVmlNode('shape');
        node.coordorigin = '0 0';
        node.coordsize = this.width + ' ' + this.height;
        node.style.width = this.width + 'px';
        node.style.height = this.height + 'px';
        node.fillcolor = JQVMap.defaultFillColor;
        node.stroked = false;
        node.path = VectorCanvas.pathSvgToVml(config.path);

        var scale = this.createVmlNode('skew');
        scale.on = true;
        scale.matrix = '0.01,0,0,0.01,0,0';
        scale.offset = '0,0';

        node.appendChild(scale);

        var fill = this.createVmlNode('fill');
        node.appendChild(fill);

        node.setFill = function (color) {
            this.getElementsByTagName('fill')[0].color = color;
            if (this.getAttribute('original') === null) {
                this.setAttribute('original', color);
            }
        };

        node.getFill = function () {
            return this.getElementsByTagName('fill')[0].color;
        };
        node.getOriginalFill = function () {
            return this.getAttribute('original');
        };
        node.setOpacity = function (opacity) {
            this.getElementsByTagName('fill')[0].opacity = parseInt(opacity * 100, 10) + '%';
        };
    }
    return node;
};
