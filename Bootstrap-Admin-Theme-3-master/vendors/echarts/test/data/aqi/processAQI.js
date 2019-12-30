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

function processAQI(arr) {
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i];
        var aqi = line[1];

        if (aqi <= 50) {
            line[7] = '"优"';
        } else if (aqi <= 100) {
            line[7] = '"良"';
        } else if (aqi <= 150) {
            line[7] = '"轻度污染"';
        } else if (aqi <= 200) {
            line[7] = '"中度污染"';
        } else if (aqi <= 300) {
            line[7] = '"重度污染"';
        } else {
            line[7] = '"严重污染"';
        }
    }

    console.log(arr.join('],\n    ['));
}
