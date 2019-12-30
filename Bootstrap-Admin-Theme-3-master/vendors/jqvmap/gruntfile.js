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

module.exports = function (grunt) {
    var gtx = require('gruntfile-gtx').wrap(grunt);
    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    gtx.alias('build', ['shell:lint', 'clean:dist', 'concat:dist', 'uglify:dist', 'test']);

    gtx.alias('release', ['build', 'bump-commit']);
    gtx.alias('release-major', ['bump-only:major', 'release']);
    gtx.alias('release-minor', ['bump-only:minor', 'release']);
    gtx.alias('release-patch', ['bump-only:patch', 'release']);

    gtx.alias('test', ['shell:lint', 'qunit:dist']);

    gtx.finalise();
};
