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
function getJasmineRequireObj() {
    if (typeof module !== 'undefined' && module.exports) {
        return exports;
    } else {
        window.jasmineRequire = window.jasmineRequire || {};
        return window.jasmineRequire;
    }
}

getJasmineRequireObj().console = function (jRequire, j$) {
    j$.ConsoleReporter = jRequire.ConsoleReporter();
};

getJasmineRequireObj().ConsoleReporter = function () {

    var noopTimer = {
        start: function () {
        },
        elapsed: function () {
            return 0;
        }
    };

    function ConsoleReporter(options) {
        var print = options.print,
            showColors = options.showColors || false,
            onComplete = options.onComplete || function () {
            },
            timer = options.timer || noopTimer,
            specCount,
            failureCount,
            failedSpecs = [],
            pendingCount,
            ansi = {
                green: '\x1B[32m',
                red: '\x1B[31m',
                yellow: '\x1B[33m',
                none: '\x1B[0m'
            },
            failedSuites = [];

        print('ConsoleReporter is deprecated and will be removed in a future version.');

        this.jasmineStarted = function () {
            specCount = 0;
            failureCount = 0;
            pendingCount = 0;
            print('Started');
            printNewline();
            timer.start();
        };

        this.jasmineDone = function () {
            printNewline();
            for (var i = 0; i < failedSpecs.length; i++) {
                specFailureDetails(failedSpecs[i]);
            }

            if (specCount > 0) {
                printNewline();

                var specCounts = specCount + ' ' + plural('spec', specCount) + ', ' +
                    failureCount + ' ' + plural('failure', failureCount);

                if (pendingCount) {
                    specCounts += ', ' + pendingCount + ' pending ' + plural('spec', pendingCount);
                }

                print(specCounts);
            } else {
                print('No specs found');
            }

            printNewline();
            var seconds = timer.elapsed() / 1000;
            print('Finished in ' + seconds + ' ' + plural('second', seconds));
            printNewline();

            for (i = 0; i < failedSuites.length; i++) {
                suiteFailureDetails(failedSuites[i]);
            }

            onComplete(failureCount === 0);
        };

        this.specDone = function (result) {
            specCount++;

            if (result.status == 'pending') {
                pendingCount++;
                print(colored('yellow', '*'));
                return;
            }

            if (result.status == 'passed') {
                print(colored('green', '.'));
                return;
            }

            if (result.status == 'failed') {
                failureCount++;
                failedSpecs.push(result);
                print(colored('red', 'F'));
            }
        };

        this.suiteDone = function (result) {
            if (result.failedExpectations && result.failedExpectations.length > 0) {
                failureCount++;
                failedSuites.push(result);
            }
        };

        return this;

        function printNewline() {
            print('\n');
        }

        function colored(color, str) {
            return showColors ? (ansi[color] + str + ansi.none) : str;
        }

        function plural(str, count) {
            return count == 1 ? str : str + 's';
        }

        function repeat(thing, times) {
            var arr = [];
            for (var i = 0; i < times; i++) {
                arr.push(thing);
            }
            return arr;
        }

        function indent(str, spaces) {
            var lines = (str || '').split('\n');
            var newArr = [];
            for (var i = 0; i < lines.length; i++) {
                newArr.push(repeat(' ', spaces).join('') + lines[i]);
            }
            return newArr.join('\n');
        }

        function specFailureDetails(result) {
            printNewline();
            print(result.fullName);

            for (var i = 0; i < result.failedExpectations.length; i++) {
                var failedExpectation = result.failedExpectations[i];
                printNewline();
                print(indent(failedExpectation.message, 2));
                print(indent(failedExpectation.stack, 2));
            }

            printNewline();
        }

        function suiteFailureDetails(result) {
            for (var i = 0; i < result.failedExpectations.length; i++) {
                printNewline();
                print(colored('red', 'An error was thrown in an afterAll'));
                printNewline();
                print(colored('red', 'AfterAll ' + result.failedExpectations[i].message));

            }
            printNewline();
        }
    }

    return ConsoleReporter;
};
