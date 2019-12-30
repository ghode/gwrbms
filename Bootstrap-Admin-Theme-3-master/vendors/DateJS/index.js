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
 * @overview NPM Module index: include all the core modules, I18n files will be loaded on the fly.
 * @author Gregory Wild-Smith <gregory@wild-smith.com>
 */
require("./src/core/i18n.js");
require("./src/core/core.js");
require("./src/core/core-prototypes.js");
require("./src/core/sugarpak.js");
require("./src/core/format_parser.js");
require("./src/core/parsing_operators.js");
require("./src/core/parsing_translator.js");
require("./src/core/parsing_grammar.js");
require("./src/core/parser.js");
require("./src/core/extras.js");
require("./src/core/time_period.js");
require("./src/core/time_span.js");
/*
 * Notice that there is no model.export or exports. This is not required as it modifies the Date object and it's prototypes.
 */