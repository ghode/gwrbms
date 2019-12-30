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
 * Registers a language handler for LLVM.
 * From https://gist.github.com/ndabas/2850418
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-llvm">(my LLVM code)</pre>
 *
 *
 * The regular expressions were adapted from:
 * https://github.com/hansstimer/llvm.tmbundle/blob/76fedd8f50fd6108b1780c51d79fbe3223de5f34/Syntaxes/LLVM.tmLanguage
 *
 * http://llvm.org/docs/LangRef.html#constants describes the language grammar.
 *
 * @author Nikhil Dabas
 */
PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            // Whitespace
            [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
            // A double quoted, possibly multi-line, string.
            [PR['PR_STRING'], /^!?\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, null, '"'],
            // comment.llvm
            [PR['PR_COMMENT'], /^;[^\r\n]*/, null, ';']
        ],
        [
            // variable.llvm
            [PR['PR_PLAIN'], /^[%@!](?:[-a-zA-Z$._][-a-zA-Z$._0-9]*|\d+)/],

            // According to http://llvm.org/docs/LangRef.html#well-formedness
            // These reserved words cannot conflict with variable names, because none of them start with a prefix character ('%' or '@').
            [PR['PR_KEYWORD'], /^[A-Za-z_][0-9A-Za-z_]*/, null],

            // constant.numeric.float.llvm
            [PR['PR_LITERAL'], /^\d+\.\d+/],

            // constant.numeric.integer.llvm
            [PR['PR_LITERAL'], /^(?:\d+|0[xX][a-fA-F0-9]+)/],

            // punctuation
            [PR['PR_PUNCTUATION'], /^[()\[\]{},=*<>:]|\.\.\.$/]
        ]),
    ['llvm', 'll']);
