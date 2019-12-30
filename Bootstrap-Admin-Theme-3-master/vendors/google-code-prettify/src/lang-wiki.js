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


/**
 * @fileoverview
 * Registers a language handler for Wiki pages.
 *
 * Based on WikiSyntax at http://code.google.com/p/support/wiki/WikiSyntax
 *
 * @author mikesamuel@gmail.com
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            // Whitespace
            [PR['PR_PLAIN'], /^[\t \xA0a-gi-z0-9]+/, null,
                '\t \xA0abcdefgijklmnopqrstuvwxyz0123456789'],
            // Wiki formatting
            [PR['PR_PUNCTUATION'], /^[=*~\^\[\]]+/, null, '=*~^[]']
        ],
        [
            // Meta-info like #summary, #labels, etc.
            ['lang-wiki.meta', /(?:^^|\r\n?|\n)(#[a-z]+)\b/],
            // A WikiWord
            [PR['PR_LITERAL'], /^(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\b/
            ],
            // A preformatted block in an unknown language
            ['lang-', /^\{\{\{([\s\S]+?)\}\}\}/],
            // A block of source code in an unknown language
            ['lang-', /^`([^\r\n`]+)`/],
            // An inline URL.
            [PR['PR_STRING'],
                /^https?:\/\/[^\/?#\s]*(?:\/[^?#\s]*)?(?:\?[^#\s]*)?(?:#\S*)?/i],
            [PR['PR_PLAIN'], /^(?:\r\n|[\s\S])[^#=*~^A-Zh\{`\[\r\n]*/]
        ]),
    ['wiki']);

PR['registerLangHandler'](
    PR['createSimpleLexer']([[PR['PR_KEYWORD'], /^#[a-z]+/i, null, '#']], []),
    ['wiki.meta']);
