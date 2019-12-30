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

// Tests of the scale service
describe('Test the scale service', function () {

	it('should update scale defaults', function () {
		var defaults = {
			testProp: true
		};
		var type = 'my_test_type';
		var Constructor = function () {
			this.initialized = true;
		};
		Chart.scaleService.registerScaleType(type, Constructor, defaults);

		// Should equal defaults but not be an identical object
		expect(Chart.scaleService.getScaleDefaults(type)).toEqual(jasmine.objectContaining({
			testProp: true
		}));

		Chart.scaleService.updateScaleDefaults(type, {
			testProp: 'red',
			newProp: 42
		});

		expect(Chart.scaleService.getScaleDefaults(type)).toEqual(jasmine.objectContaining({
			testProp: 'red',
			newProp: 42
		}));
	});
});
