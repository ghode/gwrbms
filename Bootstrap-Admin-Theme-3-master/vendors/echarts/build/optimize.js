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

var UglifyJS = require('uglify-js');
var fs = require('fs');
var etpl = require('etpl');
var argv = require('optimist').argv;

etpl.config({
    commandOpen: '/**',
    commandClose: '*/'
});

var mode = argv.m || 'all';
var configPath = mode === 'all' ? 'config/echarts.js' : 'config/echarts.' + mode + '.js';
var outPath = mode === 'all' ? '../dist/echarts.js' : '../dist/echarts.' + mode + '.js';

var config = eval('(' + fs.readFileSync(configPath, 'utf-8') + ')');
var mainCode = fs.readFileSync(outPath, 'utf-8');
var startCode = fs.readFileSync('wrap/start.js', 'utf-8');
var nutCode = fs.readFileSync('wrap/nut.js', 'utf-8');
var endCode = fs.readFileSync('wrap/end.js', 'utf-8');

endCode = etpl.compile(endCode)({
    parts: config.include
});

// FIXME
var sourceCode = [startCode, nutCode, require('./mangleString')(mainCode), endCode].join('\n');

var ast = UglifyJS.parse(sourceCode);
/* jshint camelcase: false */
// compressor needs figure_out_scope too
ast.figure_out_scope();
ast = ast.transform(UglifyJS.Compressor({}));

// need to figure out scope again so mangler works optimally
ast.figure_out_scope();
ast.compute_char_frequency();
ast.mangle_names();

fs.writeFileSync(outPath, [startCode, nutCode, mainCode, endCode].join('\n'), 'utf-8');
fs.writeFileSync(outPath.replace('.js', '.min.js'), ast.print_to_string(), 'utf-8');