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

    var zrUtil = require('zrender/core/util');

    var helper = {

        retrieveTargetInfo: function (payload, seriesModel) {
            if (payload
                && (
                    payload.type === 'treemapZoomToNode'
                    || payload.type === 'treemapRootToNode'
                )
            ) {
                var root = seriesModel.getData().tree.root;
                var targetNode = payload.targetNode;
                if (targetNode && root.contains(targetNode)) {
                    return {node: targetNode};
                }

                var targetNodeId = payload.targetNodeId;
                if (targetNodeId != null && (targetNode = root.getNodeById(targetNodeId))) {
                    return {node: targetNode};
                }
            }
        },

        // Not includes the given node at the last item.
        getPathToRoot: function (node) {
            var path = [];
            while (node) {
                node = node.parentNode;
                node && path.push(node);
            }
            return path.reverse();
        },

        aboveViewRoot: function (viewRoot, node) {
            var viewPath = helper.getPathToRoot(viewRoot);
            return zrUtil.indexOf(viewPath, node) >= 0;
        }
    };

    return helper;
});
