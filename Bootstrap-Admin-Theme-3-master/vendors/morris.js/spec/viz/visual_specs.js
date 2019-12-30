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

var examples = require('./examples');

examples.def('line', function () {
  Morris.Line({
    element: 'chart',
    data: [
      { x: 0, y: 10, z: 30 }, { x: 1, y: 20, z: 20 },
      { x: 2, y: 30, z: 10 }, { x: 3, y: 30, z: 10 },
      { x: 4, y: 20, z: 20 }, { x: 5, y: 10, z: 30 }
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['y', 'z'],
    parseTime: false
  });
  window.snapshot();
});

examples.def('area', function () {
  Morris.Area({
    element: 'chart',
    data: [
      { x: 0, y: 1, z: 1 }, { x: 1, y: 2, z: 1 },
      { x: 2, y: 3, z: 1 }, { x: 3, y: 3, z: 1 },
      { x: 4, y: 2, z: 1 }, { x: 5, y: 1, z: 1 }
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['y', 'z'],
    parseTime: false
  });
  window.snapshot();
});

examples.def('bar', function () {
  Morris.Bar({
    element: 'chart',
    data: [
      { x: 0, y: 1, z: 3 }, { x: 1, y: 2, z: 2 },
      { x: 2, y: 3, z: 1 }, { x: 3, y: 3, z: 1 },
      { x: 4, y: 2, z: 2 }, { x: 5, y: 1, z: 3 }
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['y', 'z']
  });
  window.snapshot();
});

examples.def('stacked_bar', function () {
  Morris.Bar({
    element: 'chart',
    data: [
      { x: 0, y: 1, z: 1 }, { x: 1, y: 2, z: 1 },
      { x: 2, y: 3, z: 1 }, { x: 3, y: 3, z: 1 },
      { x: 4, y: 2, z: 1 }, { x: 5, y: 1, z: 1 }
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['y', 'z'],
    stacked: true
  });
  window.snapshot();
});

examples.run();
