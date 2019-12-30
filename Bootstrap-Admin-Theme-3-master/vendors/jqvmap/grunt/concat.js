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

module.exports = {
    options: {
        banner: '/*!\n' +
            ' * <%= package.author.name %>: <%= package.description %>\n' +
            ' * @author <%= package.author.name %> <<%= package.author.email %>>\n' +
            ' * @version <%= package.version %>\n' +
            ' * @link <%= package.author.url %>\n' +
            ' * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE\n' +
            ' * @builddate <%= grunt.template.today("yyyy/mm/dd") %>\n' +
            ' */\n\n'
    },
    dist: {
        files: {
            'dist/jquery.vmap.js': [
                "src/VectorCanvas.js",
                "src/ColorScale.js",
                "src/JQVMap.js",
                "src/Base.js",
                "src/**/*.js"
            ]
        }
    }
};
