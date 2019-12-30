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

describe('angular easypiechart directive', function () {
    var $compile, $rootScope, scope;

    beforeEach(module('easypiechart'));

    beforeEach(inject(function (_$compile_, $rootScope) {
        scope = $rootScope;
        $compile = _$compile_;
    }));

    it('should have percentage default value 0', function (done) {
        scope.percent = null;
        var element = angular.element('<div easypiechart percent="percent" options="options"></div>');
        $compile(element)(scope);
        scope.$digest();
        expect(element.isolateScope().percent).toBe(0);
    });

    it('inserts the element with a canvas element', function () {
        scope.percent = -45;
        scope.options = {};
        var element = angular.element('<div easypiechart percent="percent" options="options"></div>');
        $compile(element)(scope);
        scope.$digest();
        expect(element.html()).toContain('canvas');
    });

    it('gets the options right', function (done) {
        scope.percent = 0;
        scope.options = {
            animate: {
                duration: 0,
                enabled: false
            },
            barColor: '#2C3E50',
            scaleColor: false,
            lineWidth: 20,
            lineCap: 'circle'
        };
        var element = angular.element('<div easypiechart percent="percent" options="options"></div>');
        $compile(element)(scope);
        scope.$digest();
        expect(element.isolateScope().options.animate.duration).toBe(0);
        expect(element.isolateScope().options.lineCap).toBe('circle');
    });

    it('has its own default options', function (done) {
        scope.percent = 0;
        scope.options = {};
        var element = angular.element('<div easypiechart percent="percent" options="options"></div>');
        $compile(element)(scope);
        scope.$digest();
        expect(element.isolateScope().options.size).toBe(110);
        expect(element.isolateScope().options.animate.enabled).toBe(true);
    });

    it('takes size option the right way', function () {
        scope.percent = 0;
        scope.options = {
            size: 200
        };
        var element = angular.element('<div easypiechart percent="percent" options="options"></div>');
        $compile(element)(scope);
        scope.$digest();
        expect(element.html()).toContain('height="200"');
        expect(element.html()).toContain('width="200"');
    });
});
