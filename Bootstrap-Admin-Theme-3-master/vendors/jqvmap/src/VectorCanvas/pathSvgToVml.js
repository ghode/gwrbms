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

VectorCanvas.prototype.pathSvgToVml = function (path) {
    var result = '';
    var cx = 0, cy = 0, ctrlx, ctrly;

    return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (segment, letter, coords) {
        coords = coords.replace(/(\d)-/g, '$1,-').replace(/\s+/g, ',').split(',');
        if (!coords[0]) {
            coords.shift();
        }

        for (var i = 0, l = coords.length; i < l; i++) {
            coords[i] = Math.round(100 * coords[i]);
        }

        switch (letter) {
            case 'm':
                cx += coords[0];
                cy += coords[1];
                result = 't' + coords.join(',');
                break;

            case 'M':
                cx = coords[0];
                cy = coords[1];
                result = 'm' + coords.join(',');
                break;

            case 'l':
                cx += coords[0];
                cy += coords[1];
                result = 'r' + coords.join(',');
                break;

            case 'L':
                cx = coords[0];
                cy = coords[1];
                result = 'l' + coords.join(',');
                break;

            case 'h':
                cx += coords[0];
                result = 'r' + coords[0] + ',0';
                break;

            case 'H':
                cx = coords[0];
                result = 'l' + cx + ',' + cy;
                break;

            case 'v':
                cy += coords[0];
                result = 'r0,' + coords[0];
                break;

            case 'V':
                cy = coords[0];
                result = 'l' + cx + ',' + cy;
                break;

            case 'c':
                ctrlx = cx + coords[coords.length - 4];
                ctrly = cy + coords[coords.length - 3];
                cx += coords[coords.length - 2];
                cy += coords[coords.length - 1];
                result = 'v' + coords.join(',');
                break;

            case 'C':
                ctrlx = coords[coords.length - 4];
                ctrly = coords[coords.length - 3];
                cx = coords[coords.length - 2];
                cy = coords[coords.length - 1];
                result = 'c' + coords.join(',');
                break;

            case 's':
                coords.unshift(cy - ctrly);
                coords.unshift(cx - ctrlx);
                ctrlx = cx + coords[coords.length - 4];
                ctrly = cy + coords[coords.length - 3];
                cx += coords[coords.length - 2];
                cy += coords[coords.length - 1];
                result = 'v' + coords.join(',');
                break;

            case 'S':
                coords.unshift(cy + cy - ctrly);
                coords.unshift(cx + cx - ctrlx);
                ctrlx = coords[coords.length - 4];
                ctrly = coords[coords.length - 3];
                cx = coords[coords.length - 2];
                cy = coords[coords.length - 1];
                result = 'c' + coords.join(',');
                break;

            default:
                break;
        }

        return result;

    }).replace(/z/g, '');
};
