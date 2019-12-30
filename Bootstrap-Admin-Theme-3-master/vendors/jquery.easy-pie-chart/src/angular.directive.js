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

(function (angular) {

    'use strict';

    return angular.module('easypiechart', [])

        .directive('easypiechart', [function () {
            return {
                restrict: 'A',
                require: '?ngModel',
                scope: {
                    percent: '=',
                    options: '='
                },
                link: function (scope, element, attrs) {

                    scope.percent = scope.percent || 0;

                    /**
                     * default easy pie chart options
                     * @type {Object}
                     */
                    var options = {
                        barColor: '#ef1e25',
                        trackColor: '#f9f9f9',
                        scaleColor: '#dfe0e0',
                        scaleLength: 5,
                        lineCap: 'round',
                        lineWidth: 3,
                        size: 110,
                        rotate: 0,
                        animate: {
                            duration: 1000,
                            enabled: true
                        }
                    };
                    scope.options = angular.extend(options, scope.options);

                    var pieChart = new EasyPieChart(element[0], options);

                    scope.$watch('percent', function (newVal, oldVal) {
                        pieChart.update(newVal);
                    });
                }
            };
        }]);

})(angular);