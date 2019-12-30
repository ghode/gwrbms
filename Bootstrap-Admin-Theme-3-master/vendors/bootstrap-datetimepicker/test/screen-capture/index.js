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

var fs = require('fs');
['top', 'bottom'].forEach(function (v) {
    ['left', 'right'].forEach(function (h) {
        ['1', '2', '3', '4', '5'].forEach(function (t) {
            var inFile = 'out/' + t + v.charAt(0) + h.charAt(0) + '.html';
            var outFile = 'pic/' + t + v.charAt(0) + h.charAt(0) + '.png';
            var path = 'file://' + fs.absolute(inFile)
            var page = require('webpage').create();
            page.viewportSize = {
                width: 1000,
                height: 800
            };
            ;
            page.open(path, function (status) {
                window.setTimeout(function () {
                    console.log(status);
                    page.render(outFile);
                    setTimeout(function () {
                        phantom.exit();
                    }, 0);
                }, 2000);
            });
        });
    });
});