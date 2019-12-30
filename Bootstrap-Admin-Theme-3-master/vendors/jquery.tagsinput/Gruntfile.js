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

function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function (option) {
        key = option.replace(/\.js$/, '');
        object[key] = require(path + option);
    });

    return object;
}

module.exports = function (grunt) {
    grunt.loadTasks('grunt-tasks');

    require('time-grunt')(grunt);

    // Only load tasks when they are needed
    require('jit-grunt')(grunt, {
        ngtemplates: 'grunt-angular-templates'
    });

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        env: process.env
    };

    grunt.util._.extend(config, loadConfig('./grunt-tasks/options/'));
    grunt.initConfig(config);
};