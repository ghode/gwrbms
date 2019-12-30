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

Package.describe({
    name: 'dangrossman:bootstrap-daterangepicker',
    version: '3.0.3',
    summary: 'Date range picker component',
    git: 'https://github.com/dangrossman/daterangepicker',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.0.1');

    api.use('momentjs:moment@2.22.1', ["client"]);
    api.use('jquery@3.3.1', ["client"]);

    api.addFiles('daterangepicker.js', ["client"]);
    api.addFiles('daterangepicker.css', ["client"]);
});
