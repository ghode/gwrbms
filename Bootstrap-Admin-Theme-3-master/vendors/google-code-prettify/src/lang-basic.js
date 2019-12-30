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

// Contributed by peter dot kofler at code minus cop dot org

/**
 * @fileoverview
 * Registers a language handler for Basic.
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-basic">(my BASIC code)</pre>
 *
 * @author peter dot kofler at code minus cop dot org
 */

PR.registerLangHandler(
    PR.createSimpleLexer(
        [ // shortcutStylePatterns
            // "single-line-string"
            [PR.PR_STRING, /^(?:"(?:[^\\"\r\n]|\\.)*(?:"|$))/, null, '"'],
            // Whitespace
            [PR.PR_PLAIN, /^\s+/, null, ' \r\n\t\xA0']
        ],
        [ // fallthroughStylePatterns
            // A line comment that starts with REM
            [PR.PR_COMMENT, /^REM[^\r\n]*/, null],
            [PR.PR_KEYWORD, /^\b(?:AND|CLOSE|CLR|CMD|CONT|DATA|DEF ?FN|DIM|END|FOR|GET|GOSUB|GOTO|IF|INPUT|LET|LIST|LOAD|NEW|NEXT|NOT|ON|OPEN|OR|POKE|PRINT|READ|RESTORE|RETURN|RUN|SAVE|STEP|STOP|SYS|THEN|TO|VERIFY|WAIT)\b/, null],
            [PR.PR_PLAIN, /^[A-Z][A-Z0-9]?(?:\$|%)?/i, null],
            // Literals .0, 0, 0.0 0E13
            [PR.PR_LITERAL, /^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?/i, null, '0123456789'],
            [PR.PR_PUNCTUATION, /^.[^\s\w\.$%"]*/, null]
            // [PR.PR_PUNCTUATION,   /^[-,:;!<>=\+^\/\*]+/]
        ]),
    ['basic', 'cbm']);
