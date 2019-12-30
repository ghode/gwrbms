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
 * Export echarts as CommonJS module
 */
module.exports = require('./lib/echarts');

// Import all charts and components
require('./lib/chart/line');
require('./lib/chart/bar');
require('./lib/chart/pie');
require('./lib/chart/scatter');
require('./lib/chart/radar');

require('./lib/chart/map');
require('./lib/chart/treemap');
require('./lib/chart/graph');
require('./lib/chart/gauge');
require('./lib/chart/funnel');
require('./lib/chart/parallel');
require('./lib/chart/sankey');
require('./lib/chart/boxplot');
require('./lib/chart/candlestick');
require('./lib/chart/effectScatter');
require('./lib/chart/lines');
require('./lib/chart/heatmap');

require('./lib/component/grid');
require('./lib/component/legend');
require('./lib/component/tooltip');
require('./lib/component/polar');
require('./lib/component/geo');
require('./lib/component/parallel');

require('./lib/component/title');

require('./lib/component/dataZoom');
require('./lib/component/visualMap');

require('./lib/component/markPoint');
require('./lib/component/markLine');

require('./lib/component/timeline');
require('./lib/component/toolbox');

require('zrender/lib/vml/vml');
