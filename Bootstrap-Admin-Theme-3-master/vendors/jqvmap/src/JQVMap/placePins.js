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

JQVMap.prototype.placePins = function (pins, pinMode) {
    var map = this;

    if (!pinMode || (pinMode !== 'content' && pinMode !== 'id')) {
        pinMode = 'content';
    }

    if (pinMode === 'content') {//treat pin as content
        jQuery.each(pins, function (index, pin) {
            if (jQuery('#' + map.getCountryId(index)).length === 0) {
                return;
            }

            var pinIndex = map.getPinId(index);
            var $pin = jQuery('#' + pinIndex);
            if ($pin.length > 0) {
                $pin.remove();
            }
            map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute">' + pin + '</div>');
        });
    } else { //treat pin as id of an html content
        jQuery.each(pins, function (index, pin) {
            if (jQuery('#' + map.getCountryId(index)).length === 0) {
                return;
            }
            var pinIndex = map.getPinId(index);
            var $pin = jQuery('#' + pinIndex);
            if ($pin.length > 0) {
                $pin.remove();
            }
            map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute"></div>');
            $pin.append(jQuery('#' + pin));
        });
    }

    this.positionPins();
    if (!this.pinHandlers) {
        this.pinHandlers = true;
        var positionFix = function () {
            map.positionPins();
        };
        this.container.bind('zoomIn', positionFix)
            .bind('zoomOut', positionFix)
            .bind('drag', positionFix);
    }
};
