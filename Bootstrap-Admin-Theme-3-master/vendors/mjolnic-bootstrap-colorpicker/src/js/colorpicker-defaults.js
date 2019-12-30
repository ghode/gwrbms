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

/*
 * Default plugin options
 */
var defaults = {
    horizontal: false, // horizontal mode layout ?
    inline: false, //forces to show the colorpicker as an inline element
    color: false, //forces a color
    format: false, //forces a format
    input: 'input', // children input selector
    container: false, // container selector
    component: '.add-on, .input-group-addon', // children component selector
    sliders: {
        saturation: {
            maxLeft: 100,
            maxTop: 100,
            callLeft: 'setSaturation',
            callTop: 'setBrightness'
        },
        hue: {
            maxLeft: 0,
            maxTop: 100,
            callLeft: false,
            callTop: 'setHue'
        },
        alpha: {
            maxLeft: 0,
            maxTop: 100,
            callLeft: false,
            callTop: 'setAlpha'
        }
    },
    slidersHorz: {
        saturation: {
            maxLeft: 100,
            maxTop: 100,
            callLeft: 'setSaturation',
            callTop: 'setBrightness'
        },
        hue: {
            maxLeft: 100,
            maxTop: 0,
            callLeft: 'setHue',
            callTop: false
        },
        alpha: {
            maxLeft: 100,
            maxTop: 0,
            callLeft: 'setAlpha',
            callTop: false
        }
    },
    template: '<div class="colorpicker dropdown-menu">' +
        '<div class="colorpicker-saturation"><i><b></b></i></div>' +
        '<div class="colorpicker-hue"><i></i></div>' +
        '<div class="colorpicker-alpha"><i></i></div>' +
        '<div class="colorpicker-color"><div /></div>' +
        '<div class="colorpicker-selectors"></div>' +
        '</div>',
    align: 'right',
    customClass: null,
    colorSelectors: null
};
