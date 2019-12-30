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
 * Registers a language handler for Protocol Buffers as described at
 * http://code.google.com/p/protobuf/.
 *
 * Based on the lexical grammar at
 * http://research.microsoft.com/fsharp/manual/spec2.aspx#_Toc202383715
 *
 * @author mikesamuel@gmail.com
 */

PR['registerLangHandler'](PR['sourceDecorator']({
    'keywords': (
        'bytes,default,double,enum,extend,extensions,false,'
        + 'group,import,max,message,option,'
        + 'optional,package,repeated,required,returns,rpc,service,'
        + 'syntax,to,true'),
    'types': /^(bool|(double|s?fixed|[su]?int)(32|64)|float|string)\b/,
    'cStyleComments': true
}), ['proto']);
