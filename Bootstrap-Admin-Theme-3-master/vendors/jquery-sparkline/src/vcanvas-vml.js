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

VCanvas_vml = createClass(VCanvas_base, {
    init: function (width, height, target) {
        var groupel;
        VCanvas_vml._super.init.call(this, width, height, target);
        if (target[0]) {
            target = target[0];
        }
        $.data(target, '_jqs_vcanvas', this);
        this.canvas = document.createElement('span');
        $(this.canvas).css({
            display: 'inline-block',
            position: 'relative',
            overflow: 'hidden',
            width: width,
            height: height,
            margin: '0px',
            padding: '0px',
            verticalAlign: 'top'
        });
        this._insert(this.canvas, target);
        this._calculatePixelDims(width, height, this.canvas);
        this.canvas.width = this.pixelWidth;
        this.canvas.height = this.pixelHeight;
        groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '"' +
            ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + 'px;height=' + this.pixelHeight + 'px;"></v:group>';
        this.canvas.insertAdjacentHTML('beforeEnd', groupel);
        this.group = $(this.canvas).children()[0];
        this.rendered = false;
        this.prerender = '';
    },

    _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
        var vpath = [],
            initial, stroke, fill, closed, vel, plen, i;
        for (i = 0, plen = path.length; i < plen; i++) {
            vpath[i] = '' + (path[i][0]) + ',' + (path[i][1]);
        }
        initial = vpath.splice(0, 1);
        lineWidth = lineWidth === undefined ? 1 : lineWidth;
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        closed = vpath[0] === vpath[vpath.length - 1] ? 'x ' : '';
        vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
            ' id="jqsshape' + shapeid + '" ' +
            stroke +
            fill +
            ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
            ' path="m ' + initial + ' l ' + vpath.join(', ') + ' ' + closed + 'e">' +
            ' </v:shape>';
        return vel;
    },

    _drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
        var stroke, fill, vel;
        x -= radius;
        y -= radius;
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        vel = '<v:oval ' +
            ' id="jqsshape' + shapeid + '" ' +
            stroke +
            fill +
            ' style="position:absolute;top:' + y + 'px; left:' + x + 'px; width:' + (radius * 2) + 'px; height:' + (radius * 2) + 'px"></v:oval>';
        return vel;

    },

    _drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        var vpath, startx, starty, endx, endy, stroke, fill, vel;
        if (startAngle === endAngle) {
            return '';  // VML seems to have problem when start angle equals end angle.
        }
        if ((endAngle - startAngle) === (2 * Math.PI)) {
            startAngle = 0.0;  // VML seems to have a problem when drawing a full circle that doesn't start 0
            endAngle = (2 * Math.PI);
        }

        startx = x + Math.round(Math.cos(startAngle) * radius);
        starty = y + Math.round(Math.sin(startAngle) * radius);
        endx = x + Math.round(Math.cos(endAngle) * radius);
        endy = y + Math.round(Math.sin(endAngle) * radius);

        if (startx === endx && starty === endy) {
            if ((endAngle - startAngle) < Math.PI) {
                // Prevent very small slices from being mistaken as a whole pie
                return '';
            }
            // essentially going to be the entire circle, so ignore startAngle
            startx = endx = x + radius;
            starty = endy = y;
        }

        if (startx === endx && starty === endy && (endAngle - startAngle) < Math.PI) {
            return '';
        }

        vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
            ' id="jqsshape' + shapeid + '" ' +
            stroke +
            fill +
            ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
            ' path="m ' + x + ',' + y + ' wa ' + vpath.join(', ') + ' x e">' +
            ' </v:shape>';
        return vel;
    },

    _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
        return this._drawShape(shapeid, [[x, y], [x, y + height], [x + width, y + height], [x + width, y], [x, y]], lineColor, fillColor);
    },

    reset: function () {
        this.group.innerHTML = '';
    },

    appendShape: function (shape) {
        var vel = this['_draw' + shape.type].apply(this, shape.args);
        if (this.rendered) {
            this.group.insertAdjacentHTML('beforeEnd', vel);
        } else {
            this.prerender += vel;
        }
        this.lastShapeId = shape.id;
        return shape.id;
    },

    replaceWithShape: function (shapeid, shape) {
        var existing = $('#jqsshape' + shapeid),
            vel = this['_draw' + shape.type].apply(this, shape.args);
        existing[0].outerHTML = vel;
    },

    replaceWithShapes: function (shapeids, shapes) {
        // replace the first shapeid with all the new shapes then toast the remaining old shapes
        var existing = $('#jqsshape' + shapeids[0]),
            replace = '',
            slen = shapes.length,
            i;
        for (i = 0; i < slen; i++) {
            replace += this['_draw' + shapes[i].type].apply(this, shapes[i].args);
        }
        existing[0].outerHTML = replace;
        for (i = 1; i < shapeids.length; i++) {
            $('#jqsshape' + shapeids[i]).remove();
        }
    },

    insertAfterShape: function (shapeid, shape) {
        var existing = $('#jqsshape' + shapeid),
            vel = this['_draw' + shape.type].apply(this, shape.args);
        existing[0].insertAdjacentHTML('afterEnd', vel);
    },

    removeShapeId: function (shapeid) {
        var existing = $('#jqsshape' + shapeid);
        this.group.removeChild(existing[0]);
    },

    getShapeAt: function (el, x, y) {
        var shapeid = el.id.substr(8);
        return shapeid;
    },

    render: function () {
        if (!this.rendered) {
            // batch the intial render into a single repaint
            this.group.innerHTML = this.prerender;
            this.rendered = true;
        }
    }
});

