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

    var List = require('../../data/List');
    var Graph = require('../../data/Graph');
    var linkList = require('../../data/helper/linkList');
    var completeDimensions = require('../../data/helper/completeDimensions');
    var CoordinateSystem = require('../../CoordinateSystem');
    var zrUtil = require('zrender/core/util');
    var createListFromArray = require('./createListFromArray');

    return function (nodes, edges, hostModel, directed, beforeLink) {
        var graph = new Graph(directed);
        for (var i = 0; i < nodes.length; i++) {
            graph.addNode(zrUtil.retrieve(
                // Id, name, dataIndex
                nodes[i].id, nodes[i].name, i
            ), i);
        }

        var linkNameList = [];
        var validEdges = [];
        for (var i = 0; i < edges.length; i++) {
            var link = edges[i];
            var source = link.source;
            var target = link.target;
            // addEdge may fail when source or target not exists
            if (graph.addEdge(source, target, i)) {
                validEdges.push(link);
                linkNameList.push(zrUtil.retrieve(link.id, source + ' > ' + target));
            }
        }

        var coordSys = hostModel.get('coordinateSystem');
        var nodeData;
        if (coordSys === 'cartesian2d' || coordSys === 'polar') {
            nodeData = createListFromArray(nodes, hostModel, hostModel.ecModel);
        } else {
            // FIXME
            var coordSysCtor = CoordinateSystem.get(coordSys);
            // FIXME
            var dimensionNames = completeDimensions(
                ((coordSysCtor && coordSysCtor.type !== 'view') ? (coordSysCtor.dimensions || []) : []).concat(['value']),
                nodes
            );
            nodeData = new List(dimensionNames, hostModel);
            nodeData.initData(nodes);
        }

        var edgeData = new List(['value'], hostModel);
        edgeData.initData(validEdges, linkNameList);

        beforeLink && beforeLink(nodeData, edgeData);

        linkList({
            mainData: nodeData,
            struct: graph,
            structAttr: 'graph',
            datas: {node: nodeData, edge: edgeData},
            datasAttr: {node: 'data', edge: 'edgeData'}
        });

        // Update dataIndex of nodes and edges because invalid edge may be removed
        graph.update();

        return graph;
    };
});
