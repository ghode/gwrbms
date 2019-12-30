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
    var vec2 = require('zrender/core/vector');
    return function (graph) {
        graph.eachEdge(function (edge) {
            var curveness = edge.getModel().get('lineStyle.normal.curveness') || 0;
            var p1 = vec2.clone(edge.node1.getLayout());
            var p2 = vec2.clone(edge.node2.getLayout());
            var points = [p1, p2];
            if (curveness > 0) {
                points.push([
                    (p1[0] + p2[0]) / 2 - (p1[1] - p2[1]) * curveness,
                    (p1[1] + p2[1]) / 2 - (p2[0] - p1[0]) * curveness
                ]);
            }
            edge.setLayout(points);
        });
    };
});
