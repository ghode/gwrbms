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
 * Transitionize example.
 *
 * Shows how to change dynamically the transitions of an element.
 *
 * In this case, the `elem` background color and left properties are given different transition duration,
 * according to it's current position. If the circle is in it's initial position, it goes right and
 * changes background color faster. If it's already been moved - gets back left and changes background
 * color slower.
 *
 * In order for this to work, with Browserify(http://browserify.org/) already installed, execute the following command:
 *
 *    browserify examples/browserify.js -o examples/bundle.js
 *
 */

var transitionize = require('../transitionize');

window.onload = function() {
  var elem = document.querySelector('.js-elem')
    , prop = {};

  elem.addEventListener('click', function() {
    var position = parseInt(elem.style.left) || 0;

    if (position == 0) {
      this.style.left = this.parentNode.offsetWidth - this.offsetWidth + 'px';
      this.style.backgroundColor = '#53e7d0';

      prop = {
          'background-color': '0.3s'
        , 'left': '0.3s'
      };
    } else {
      this.style.left = 0;
      this.style.backgroundColor = '#febf04';

      prop = {
          'background-color': '1s'
        , 'left': '1s'
      };
    }

    transitionize(elem, prop);
  });
};