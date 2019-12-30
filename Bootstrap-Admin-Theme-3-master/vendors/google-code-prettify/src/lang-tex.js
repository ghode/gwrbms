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
 * Support for tex highlighting as discussed on
 * <a href="http://meta.tex.stackexchange.com/questions/872/text-immediate-following-double-backslashes-is-highlighted-as-macro-inside-a-code/876#876">meta.tex.stackexchange.com</a>.
 *
 * @author Martin S.
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            // whitespace
            [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
            // all comments begin with '%'
            [PR['PR_COMMENT'], /^%[^\r\n]*/, null, '%']
        ],
        [
            //[PR['PR_DECLARATION'], /^\\([egx]?def|(new|renew|provide)(command|environment))\b/],
            // any command starting with a \ and contains
            // either only letters (a-z,A-Z), '@' (internal macros)
            [PR['PR_KEYWORD'], /^\\[a-zA-Z@]+/],
            // or contains only one character
            [PR['PR_KEYWORD'], /^\\./],
            // Highlight dollar for math mode and ampersam for tabular
            [PR['PR_TYPE'], /^[$&]/],
            // numeric measurement values with attached units
            [PR['PR_LITERAL'],
                /[+-]?(?:\.\d+|\d+(?:\.\d*)?)(cm|em|ex|in|pc|pt|bp|mm)/i],
            // punctuation usually occurring within commands
            [PR['PR_PUNCTUATION'], /^[{}()\[\]=]+/]
        ]),
    ['latex', 'tex']);
