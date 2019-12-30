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

// package metadata file for Meteor.js
'use strict';

var packageName = 'abpetkov:switchery'; // https://atmospherejs.com/mediatainment/switchery
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
    name: packageName,
    summary: 'Switchery (official) - turns your default HTML checkbox inputs into beautiful iOS 7 style switches.',
    version: "0.1.0", //packageJson.version,
    git: 'https://github.com/abpetkov/switchery'
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
    api.export('Switchery');
    api.addFiles(['dist/switchery.js', 'dist/switchery.css', 'meteor/export.js'], where);
});

Package.onTest(function(api) {
    api.use(packageName, where);
    api.use('tinytest', where);
    api.addFiles('meteor/tests.js', where); // testing specific files
});
