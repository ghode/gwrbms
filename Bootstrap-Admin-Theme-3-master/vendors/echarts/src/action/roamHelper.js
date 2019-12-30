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

    var roamHelper = {};

    /**
     * @param {module:echarts/coord/View} view
     * @param {Object} payload
     * @param {Object} [zoomLimit]
     */
    roamHelper.updateCenterAndZoom = function (
        view, payload, zoomLimit
    ) {
        var previousZoom = view.getZoom();
        var center = view.getCenter();
        var zoom = payload.zoom;

        var point = view.dataToPoint(center);

        if (payload.dx != null && payload.dy != null) {
            point[0] -= payload.dx;
            point[1] -= payload.dy;

            var center = view.pointToData(point);
            view.setCenter(center);
        }
        if (zoom != null) {
            if (zoomLimit) {
                var zoomMin = zoomLimit.min || 0;
                var zoomMax = zoomLimit.max || Infinity;
                zoom = Math.max(
                    Math.min(previousZoom * zoom, zoomMax),
                    zoomMin
                ) / previousZoom;
            }

            // Zoom on given point(originX, originY)
            view.scale[0] *= zoom;
            view.scale[1] *= zoom;
            var position = view.position;
            var fixX = (payload.originX - position[0]) * (zoom - 1);
            var fixY = (payload.originY - position[1]) * (zoom - 1);

            position[0] -= fixX;
            position[1] -= fixY;

            view.updateTransform();
            // Get the new center
            var center = view.pointToData(point);
            view.setCenter(center);
            view.setZoom(zoom * previousZoom);
        }

        return {
            center: view.getCenter(),
            zoom: view.getZoom()
        };
    };

    return roamHelper;
});
