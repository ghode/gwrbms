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

// DATA DEFINITION
function getData() {
    var data = [];

    data.push({
        data: [[0, 1], [1, 4], [2, 2]]
    });

    data.push({
        data: [[0, 5], [1, 3], [2, 1]]
    });

    return data;
}


// ORDERED & STACKED CHART
var orig_data = getData();

// Add order: 0 to the existing bars
for (var i = 0; i < orig_data.length; i++) {
    orig_data[i].bars = {
        order: 0
    };
    orig_data[i].stack = true;
}

orig_data.push({
    data: [[0, 4], [1, 1], [2, 3]],
    bars: {
        order: 1
    },
    stack: true
});

orig_data.push({
    data: [[0, 7], [1, 2], [2, 3]],
    bars: {
        order: 1
    },
    stack: true
});
$.plot($('#stacked-ordered-chart'), orig_data, {
    bars: {
        show: true,
        barWidth: 0.4
    }
});

// Don't want any logs for the working examples

// STACKED CHART
var d = getData();
for (var i = 0; i < d.length; i++) {
    d[i].stack = true;
}

$.plot($('#stacked-chart'), d, {
    bars: {
        show: true
    }
});


// ORDERED CHART
var d = getData();
for (var i = 0; i < d.length; i++) {
    d[i].bars = {
        order: i
    }
}

$.plot($('#ordered-chart'), d, {
    bars: {
        show: true,
        barWidth: 0.4
    }
});
