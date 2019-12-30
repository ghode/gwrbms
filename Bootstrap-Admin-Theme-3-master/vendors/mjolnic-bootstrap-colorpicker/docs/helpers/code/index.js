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

var beautify = require('js-beautify').html;

var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};
module.exports.register = function (Handlebars, options) {
    Handlebars.registerHelper('code', function (hboptions) {
        var codeStr = beautify(String(hboptions.fn(this)).trim(), {
            "wrap_line_length": 80,
            "wrap_attributes": "auto",
            "indent_scripts": "normal"
        }).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });

        return '<div class="example-code">' + codeStr + '</div>';
    });
};
