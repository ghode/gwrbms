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
 * Registers a language handler for OCaml, SML, F# and similar languages.
 *
 * Based on the lexical grammar at
 * http://research.microsoft.com/en-us/um/cambridge/projects/fsharp/manual/spec.html#_Toc270597388
 *
 * @author mikesamuel@gmail.com
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            // Whitespace is made up of spaces, tabs and newline characters.
            [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
            // #if ident/#else/#endif directives delimit conditional compilation
            // sections
            [PR['PR_COMMENT'],
                /^#(?:if[\t\n\r \xA0]+(?:[a-z_$][\w\']*|``[^\r\n\t`]*(?:``|$))|else|endif|light)/i,
                null, '#'],
            // A double or single quoted, possibly multi-line, string.
            // F# allows escaped newlines in strings.
            [PR['PR_STRING'], /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])(?:\'|$))/, null, '"\'']
        ],
        [
            // Block comments are delimited by (* and *) and may be
            // nested. Single-line comments begin with // and extend to
            // the end of a line.
            // TODO: (*...*) comments can be nested.  This does not handle that.
            [PR['PR_COMMENT'], /^(?:\/\/[^\r\n]*|\(\*[\s\S]*?\*\))/],
            [PR['PR_KEYWORD'], /^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/],
            // A number is a hex integer literal, a decimal real literal, or in
            // scientific notation.
            [PR['PR_LITERAL'],
                /^[+\-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
            [PR['PR_PLAIN'], /^(?:[a-z_][\w']*[!?#]?|``[^\r\n\t`]*(?:``|$))/i],
            // A printable non-space non-special character
            [PR['PR_PUNCTUATION'], /^[^\t\n\r \xA0\"\'\w]+/]
        ]),
    ['fs', 'ml']);
