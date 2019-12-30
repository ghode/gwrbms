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

var fs = require("fs");

var base = fs.readFileSync('base.html').toString();

['top', 'bottom'].forEach(function (v) {
    ['left', 'right'].forEach(function (h) {
        ['1', '2', '3', '4', '5'].forEach(function (t) {
            var text = fs.readFileSync('t' + t + '.html').toString();
            var outFile = 'out/' + t + v.charAt(0) + h.charAt(0) + '.html';
            var out = base
                .replace(/\{\{\{t\}\}\}/g, text)
                .replace(/\{\{v\}\}/g, v)
                .replace(/\{\{h\}\}/g, h);
            fs.writeFileSync(outFile, out);
        });
    });
});
