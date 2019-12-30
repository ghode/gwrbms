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

JQVMap.prototype.positionPins = function () {
    var map = this;
    var pins = this.container.find('.jqvmap-pin');
    jQuery.each(pins, function (index, pinObj) {
        pinObj = jQuery(pinObj);
        var countryId = map.getCountryId(pinObj.attr('for').toLowerCase());
        var countryObj = jQuery('#' + countryId);

        var bbox = document.getElementById(countryId).getBBox();
        var position = countryObj.position();

        var scale = map.scale;

        var left = position.left + (bbox.width / 2) * scale - pinObj.width() / 2,
            top = position.top + (bbox.height / 2) * scale - pinObj.height() / 2;

        pinObj.css('left', left).css('top', top);
    });
};
