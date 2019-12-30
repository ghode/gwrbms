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
 * Registers a language handler for the Nemerle language.
 * http://nemerle.org
 * @author Zimin A.V.
 */
(function () {
    // http://nemerle.org/wiki/index.php?title=Base_keywords
    var keywords = 'abstract|and|as|base|catch|class|def|delegate|enum|event|extern|false|finally|'
        + 'fun|implements|interface|internal|is|macro|match|matches|module|mutable|namespace|new|'
        + 'null|out|override|params|partial|private|protected|public|ref|sealed|static|struct|'
        + 'syntax|this|throw|true|try|type|typeof|using|variant|virtual|volatile|when|where|with|'
        + 'assert|assert2|async|break|checked|continue|do|else|ensures|for|foreach|if|late|lock|new|nolate|'
        + 'otherwise|regexp|repeat|requires|return|surroundwith|unchecked|unless|using|while|yield';

    PR['registerLangHandler'](PR['createSimpleLexer'](
        // shortcutStylePatterns
        [
            [PR['PR_STRING'], /^(?:\'(?:[^\\\'\r\n]|\\.)*\'|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, '"'],
            [PR['PR_COMMENT'], /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/, null, '#'],
            [PR['PR_PLAIN'], /^\s+/, null, ' \r\n\t\xA0']
        ],
        // fallthroughStylePatterns
        [
            [PR['PR_STRING'], /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null],
            [PR['PR_STRING'], /^<#(?:[^#>])*(?:#>|$)/, null],
            [PR['PR_STRING'], /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, null],
            [PR['PR_COMMENT'], /^\/\/[^\r\n]*/, null],
            [PR['PR_COMMENT'], /^\/\*[\s\S]*?(?:\*\/|$)/, null],
            [PR['PR_KEYWORD'], new RegExp('^(?:' + keywords + ')\\b'), null],
            [PR['PR_TYPE'], /^(?:array|bool|byte|char|decimal|double|float|int|list|long|object|sbyte|short|string|ulong|uint|ufloat|ulong|ushort|void)\b/, null],
            [PR['PR_LITERAL'], /^@[a-z_$][a-z_$@0-9]*/i, null],
            [PR['PR_TYPE'], /^@[A-Z]+[a-z][A-Za-z_$@0-9]*/, null],
            [PR['PR_PLAIN'], /^'?[A-Za-z_$][a-z_$@0-9]*/i, null],
            [PR['PR_LITERAL'], new RegExp(
                '^(?:'
                // A hex number
                + '0x[a-f0-9]+'
                // or an octal or decimal number,
                + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
                // possibly in scientific notation
                + '(?:e[+\\-]?\\d+)?'
                + ')'
                // with an optional modifier like UL for unsigned long
                + '[a-z]*', 'i'), null, '0123456789'],

            [PR['PR_PUNCTUATION'], /^.[^\s\w\.$@\'\"\`\/\#]*/, null]
        ]),
        ['n', 'nemerle']);
})();
