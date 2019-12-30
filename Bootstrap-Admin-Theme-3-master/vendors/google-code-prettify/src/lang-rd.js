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
 * Support for R documentation (Rd) files
 *
 * Minimal highlighting or Rd files, basically just highlighting
 * macros. It does not try to identify verbatim or R-like regions of
 * macros as that is too complicated for a lexer.  Descriptions of the
 * Rd format can be found
 * http://cran.r-project.org/doc/manuals/R-exts.html and
 * http://developer.r-project.org/parseRd.pdf.
 *
 * @author Jeffrey Arnold
 */
PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            // whitespace
            [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
            // all comments begin with '%'
            [PR['PR_COMMENT'], /^%[^\r\n]*/, null, '%']
        ],
        [// special macros with no args
            [PR['PR_LITERAL'], /^\\(?:cr|l?dots|R|tab)\b/],
            // macros
            [PR['PR_KEYWORD'], /^\\[a-zA-Z@]+/],
            // highlighted as macros, since technically they are
            [PR['PR_KEYWORD'], /^#(?:ifn?def|endif)/],
            // catch escaped brackets
            [PR['PR_PLAIN'], /^\\[{}]/],
            // punctuation
            [PR['PR_PUNCTUATION'], /^[{}()\[\]]+/]
        ]),
    ['Rd', 'rd']);
