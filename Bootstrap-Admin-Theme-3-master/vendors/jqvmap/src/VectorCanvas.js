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

var VectorCanvas = function (width, height, params) {
    this.mode = window.SVGAngle ? 'svg' : 'vml';
    this.params = params;

    if (this.mode === 'svg') {
        this.createSvgNode = function (nodeName) {
            return document.createElementNS(this.svgns, nodeName);
        };
    } else {
        try {
            if (!document.namespaces.rvml) {
                document.namespaces.add('rvml', 'urn:schemas-microsoft-com:vml');
            }
            this.createVmlNode = function (tagName) {
                return document.createElement('<rvml:' + tagName + ' class="rvml">');
            };
        } catch (e) {
            this.createVmlNode = function (tagName) {
                return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
            };
        }

        document.createStyleSheet().addRule('.rvml', 'behavior:url(#default#VML)');
    }

    if (this.mode === 'svg') {
        this.canvas = this.createSvgNode('svg');
    } else {
        this.canvas = this.createVmlNode('group');
        this.canvas.style.position = 'absolute';
    }

    this.setSize(width, height);
};

VectorCanvas.prototype = {
    svgns: 'http://www.w3.org/2000/svg',
    mode: 'svg',
    width: 0,
    height: 0,
    canvas: null
};
