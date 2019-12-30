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

module.exports = {
    legend: {
        bottom: '5%',
        data: ['rose1', 'rose2', 'rose3', 'rose4']
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [20, 80],
            center: ['25%', 110],
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 25, name: 'rose4'},
                {value: 20, name: 'rose5'},
                {value: 35, name: 'rose6'},
                {value: 30, name: 'rose7'},
                {value: 40, name: 'rose8'}
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [30, 80],
            center: ['75%', 110],
            roseType: 'area',
            labelLine: {
                normal: {
                    length: 5
                }
            },
            data: [
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 25, name: 'rose4'},
                {value: 20, name: 'rose5'},
                {value: 35, name: 'rose6'},
                {value: 30, name: 'rose7'},
                {value: 40, name: 'rose8'}
            ]
        },
        {
            name: '仪表盘',
            type: 'gauge',
            radius: 100,
            center: ['50%', 280],
            detail: {formatter: '{value}%'},
            data: [
                {value: 50, name: 'Gauge'}
            ]
        }
    ]
};
