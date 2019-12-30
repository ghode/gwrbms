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

var esprima = require('esprima');
var escodegen = require('escodegen');
var estraverse = require('estraverse');

var SYNTAX = estraverse.Syntax;

var STR_MIN_LENGTH = 5;
var STR_MIN_DIST = 1000;
var STR_MIN_COUNT = 2;

function createDeclaration(declarations) {
    return {
        type: SYNTAX.VariableDeclaration,
        declarations: declarations,
        kind: 'var'
    };
}

function createDeclarator(id, init) {
    return {
        type: SYNTAX.VariableDeclarator,
        id: {
            type: SYNTAX.Identifier,
            name: id
        },
        init: {
            type: SYNTAX.Literal,
            value: init
        }
    };
}

function base54Digits() {
    return 'etnrisouaflchpdvmgybwESxTNCkLAOM_DPHBjFIqRUzWXV$JKQGYZ0516372984';
}

var base54 = (function () {
    var DIGITS = base54Digits();
    return function (num) {
        var ret = '';
        var base = 54;
        do {
            ret += DIGITS.charAt(num % base);
            num = Math.floor(num / base);
            base = 64;
        } while (num > 0);
        return ret;
    };
})();

function mangleString(source) {

    var ast = esprima.parse(source, {
        loc: true
    });

    var stringVariables = {};

    var stringRelaceCount = 0;

    estraverse.traverse(ast, {
        enter: function (node, parent) {
            if (node.type === SYNTAX.Literal
                && typeof node.value === 'string'
            ) {
                // Ignore if string is the key of property
                if (parent.type === SYNTAX.Property) {
                    return;
                }
                var value = node.value;
                if (value.length > STR_MIN_LENGTH) {
                    if (!stringVariables[value]) {
                        stringVariables[value] = {
                            count: 0,
                            lastLoc: node.loc.start.line,
                            name: '__echartsString__' + base54(stringRelaceCount++)
                        };
                    }
                    var diff = node.loc.start.line - stringVariables[value].lastLoc;
                    // GZIP ?
                    if (diff >= STR_MIN_DIST) {
                        stringVariables[value].lastLoc = node.loc.start.line;
                        stringVariables[value].count++;
                    }
                }
            }

            if (node.type === SYNTAX.MemberExpression && !node.computed) {
                if (node.property.type === SYNTAX.Identifier) {
                    var value = node.property.name;
                    if (value.length > STR_MIN_LENGTH) {
                        if (!stringVariables[value]) {
                            stringVariables[value] = {
                                count: 0,
                                lastLoc: node.loc.start.line,
                                name: '__echartsString__' + base54(stringRelaceCount++)
                            };
                        }
                        var diff = node.loc.start.line - stringVariables[value].lastLoc;
                        if (diff >= STR_MIN_DIST) {
                            stringVariables[value].lastLoc = node.loc.start.line;
                            stringVariables[value].count++;
                        }
                    }
                }
            }
        }
    });

    estraverse.replace(ast, {
        enter: function (node, parent) {
            if ((node.type === SYNTAX.Literal
                && typeof node.value === 'string')
            ) {
                // Ignore if string is the key of property
                if (parent.type === SYNTAX.Property) {
                    return;
                }
                var str = node.value;
                if (stringVariables[str] && stringVariables[str].count > STR_MIN_COUNT) {
                    return {
                        type: SYNTAX.Identifier,
                        name: stringVariables[str].name
                    };
                }
            }
            if (node.type === SYNTAX.MemberExpression && !node.computed) {
                if (node.property.type === SYNTAX.Identifier) {
                    var str = node.property.name;
                    if (stringVariables[str] && stringVariables[str].count > STR_MIN_COUNT) {
                        return {
                            type: SYNTAX.MemberExpression,
                            object: node.object,
                            property: {
                                type: SYNTAX.Identifier,
                                name: stringVariables[str].name
                            },
                            computed: true
                        };
                    }
                }
            }
        }
    });

    // Add variables in the top
    for (var str in stringVariables) {
        // Used more than once
        if (stringVariables[str].count > STR_MIN_COUNT) {
            ast.body.unshift(createDeclaration([
                createDeclarator(stringVariables[str].name, str)
            ]));
        }
    }

    return escodegen.generate(
        ast,
        {
            format: {escapeless: true},
            comment: true
        }
    );
}

exports = module.exports = mangleString;
