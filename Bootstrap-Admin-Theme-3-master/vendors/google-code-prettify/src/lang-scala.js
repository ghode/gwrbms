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
 * Registers a language handler for Scala.
 *
 * Derived from http://lampsvn.epfl.ch/svn-repos/scala/scala-documentation/trunk/src/reference/SyntaxSummary.tex
 *
 * @author mikesamuel@gmail.com
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            // Whitespace
            [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
            // A double or single quoted string
            // or a triple double-quoted multi-line string.
            [PR['PR_STRING'],
                /^(?:"(?:(?:""(?:""?(?!")|[^\\"]|\\.)*"{0,3})|(?:[^"\r\n\\]|\\.)*"?))/,
                null, '"'],
            [PR['PR_LITERAL'], /^`(?:[^\r\n\\`]|\\.)*`?/, null, '`'],
            [PR['PR_PUNCTUATION'], /^[!#%&()*+,\-:;<=>?@\[\\\]^{|}~]+/, null,
                '!#%&()*+,-:;<=>?@[\\]^{|}~']
        ],
        [
            // A symbol literal is a single quote followed by an identifier with no
            // single quote following
            // A character literal has single quotes on either side
            [PR['PR_STRING'], /^'(?:[^\r\n\\']|\\(?:'|[^\r\n']+))'/],
            [PR['PR_LITERAL'], /^'[a-zA-Z_$][\w$]*(?!['$\w])/],
            [PR['PR_KEYWORD'], /^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/],
            [PR['PR_LITERAL'], /^(?:true|false|null|this)\b/],
            [PR['PR_LITERAL'], /^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i],
            // Treat upper camel case identifiers as types.
            [PR['PR_TYPE'], /^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],
            [PR['PR_PLAIN'], /^[$a-zA-Z_][\w$]*/],
            [PR['PR_COMMENT'], /^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],
            [PR['PR_PUNCTUATION'], /^(?:\.+|\/)/]
        ]),
    ['scala']);
