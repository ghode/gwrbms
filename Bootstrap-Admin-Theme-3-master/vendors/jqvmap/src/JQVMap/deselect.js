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

JQVMap.prototype.deselect = function (cc, path) {
    cc = cc.toLowerCase();
    path = path || jQuery('#' + this.getCountryId(cc))[0];

    if (this.isSelected(cc)) {
        this.selectedRegions.splice(this.selectIndex(cc), 1);

        jQuery(this.container).trigger('regionDeselect.jqvmap', [cc]);
        path.currentFillColor = path.getOriginalFill();
        path.setFill(path.getOriginalFill());
    } else {
        for (var key in this.countries) {
            this.selectedRegions.splice(this.selectedRegions.indexOf(key), 1);
            this.countries[key].currentFillColor = this.color;
            this.countries[key].setFill(this.color);
        }
    }
};
