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

define(function (require) {

    var SeriesModel = require('../../model/Series');
    var createGraphFromNodeEdge = require('../helper/createGraphFromNodeEdge');
    var createGraphFromNodeMatrix = require('../helper/createGraphFromNodeMatrix');

    var ChordSeries = SeriesModel.extend({

        type: 'series.chord',

        getInitialData: function (option) {
            var edges = option.edges || option.links;
            var nodes = option.data || option.nodes;
            var matrix = option.matrix;
            if (nodes && edges) {
                var graph = createGraphFromNodeEdge(nodes, edges, this, true);
                return graph.data;
            } else if (nodes && matrix) {
                var graph = createGraphFromNodeMatrix(nodes, matrix, this, true);
                return graph.data;
            }
        },

        /**
         * @return {module:echarts/data/Graph}
         */
        getGraph: function () {
            return this.getData().graph;
        },

        /**
         * @return {module:echarts/data/List}
         */
        getEdgeData: function () {
            return this.getGraph().edgeData;
        },

        defaultOption: {
            center: ['50%', '50%'],
            radius: ['65%', '75%'],
            //
            // layout: 'circular',

            sort: 'none',
            sortSub: 'none',
            padding: 0.02,
            startAngle: 90,
            clockwise: true,

            itemStyle: {
                normal: {},
                emphasis: {}
            },

            chordStyle: {
                normal: {},
                emphasis: {}
            }
        }
    });

    return ChordSeries;
});
