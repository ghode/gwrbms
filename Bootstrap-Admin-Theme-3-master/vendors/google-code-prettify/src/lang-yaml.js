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

// Contributed by ribrdb @ code.google.com

/**
 * @fileoverview
 * Registers a language handler for YAML.
 *
 * @author ribrdb
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            [PR['PR_PUNCTUATION'], /^[:|>?]+/, null, ':|>?'],
            [PR['PR_DECLARATION'], /^%(?:YAML|TAG)[^#\r\n]+/, null, '%'],
            [PR['PR_TYPE'], /^[&]\S+/, null, '&'],
            [PR['PR_TYPE'], /^!\S*/, null, '!'],
            [PR['PR_STRING'], /^"(?:[^\\"]|\\.)*(?:"|$)/, null, '"'],
            [PR['PR_STRING'], /^'(?:[^']|'')*(?:'|$)/, null, "'"],
            [PR['PR_COMMENT'], /^#[^\r\n]*/, null, '#'],
            [PR['PR_PLAIN'], /^\s+/, null, ' \t\r\n']
        ],
        [
            [PR['PR_DECLARATION'], /^(?:---|\.\.\.)(?:[\r\n]|$)/],
            [PR['PR_PUNCTUATION'], /^-/],
            [PR['PR_KEYWORD'], /^\w+:[ \r\n]/],
            [PR['PR_PLAIN'], /^\w+/]
        ]), ['yaml', 'yml']);
