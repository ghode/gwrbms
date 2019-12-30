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

var glob = require('glob');
var Canvas = require('canvas');
var echarts = require('echarts');
var fs = require('fs');
var path = require('path');

require('echarts/map/js/china');

var options = {
    bar: require('./option/bar'),
    area: require('./option/area'),
    scatter: require('./option/scatter'),
    pie: require('./option/pie'),
    graph: require('./option/graph'),
    map: require('./option/map')
};
var WIDTH = 600;
var HEIGHT = 400;
echarts.setCanvasCreator(function () {
    return createCanvas();
});

var font = new Canvas.Font('Helvetica', '/System/Library/Fonts/Helvetica.dfont');
font.addFace('/System/Library/Fonts/Helvetica.dfont', 'bolder');

glob('../*.js', function (err, themePathList) {
    themePathList.forEach(function (themePath) {
        var themeName = path.basename(themePath, '.js');
        var canvasList = [];
        require(themePath);
        echarts.util.each(options, function (option) {
            var canvas = createCanvas();
            var chart = echarts.init(canvas, themeName);
            var optionNeedFix = option;
            if (option.options) {
                optionNeedFix = option.options[0];
            }
            canvasList.push(canvas);
            optionNeedFix.animation = false;
            optionNeedFix.textStyle = {
                fontFamily: 'Helvetica',
                fontSize: 12
            };
            chart.setOption(option);
            chart.dispose();
        });

        var columnCount = 2;
        var outputCanvas = new Canvas(WIDTH * columnCount, HEIGHT * canvasList.length / columnCount);
        var outputCtx = outputCanvas.getContext('2d');
        canvasList.forEach(function (canvas, idx) {
            outputCtx.drawImage(canvas, idx % columnCount * WIDTH, Math.floor(idx / columnCount) * HEIGHT, WIDTH, HEIGHT);
        });

        fs.writeFileSync('../thumb/' + themeName + '.png', outputCanvas.toBuffer());
    });
});

function createCanvas() {
    var canvas = new Canvas(WIDTH, HEIGHT);
    var ctx = canvas.getContext('2d');
    ctx.addFont(font);
    return canvas;
}
