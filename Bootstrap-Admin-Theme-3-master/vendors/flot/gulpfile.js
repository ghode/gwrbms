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

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var filesExist = require('files-exist');
var maps = require('gulp-sourcemaps');
var gulpSequence = require('gulp-sequence');

var files = [
    './source/jquery.canvaswrapper.js',
    './source/jquery.colorhelpers.js',
    './source/jquery.flot.js',
    './source/jquery.flot.saturated.js',
    './source/jquery.flot.browser.js',
    './source/jquery.flot.drawSeries.js',
    './source/jquery.flot.errorbars.js',
    './source/jquery.flot.uiConstants.js',
    './source/jquery.flot.logaxis.js',
    './source/jquery.flot.symbol.js',
    './source/jquery.flot.flatdata.js',
    './source/jquery.flot.navigate.js',
    './source/jquery.flot.fillbetween.js',
    './source/jquery.flot.stack.js',
    './source/jquery.flot.touchNavigate.js',
    './source/jquery.flot.hover.js',
    './source/jquery.flot.touch.js',
    './source/jquery.flot.time.js',
    './source/jquery.flot.axislabels.js',
    './source/jquery.flot.selection.js',
    './source/jquery.flot.composeImages.js',
    './source/jquery.flot.legend.js'
];

gulp.task('build_flot_source', function () {
    return gulp.src(filesExist(files, {exceptionMessage: 'Missing file'}))
        .pipe(concat('jquery.flot.js'))
        .pipe(gulp.dest('dist/source'));
});

gulp.task('build_flot_minified', function () {
    return gulp.src(filesExist(files, {exceptionMessage: 'Missing file'}))
        .pipe(maps.init())
        .pipe(babel({
            "presets": [
                "@babel/preset-env"
            ]
        }))
        .pipe(concat('jquery.flot.js'))
        .pipe(uglify())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('dist/es5'));
});

gulp.task('build', gulp.series('build_flot_source', 'build_flot_minified'));
