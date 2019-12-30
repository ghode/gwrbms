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

// Test the core element functionality
describe('Core element tests', function () {
	it('should transition model properties', function () {
		var element = new Chart.Element({
			_model: {
				numberProp: 0,
				numberProp2: 100,
				_underscoreProp: 0,
				stringProp: 'abc',
				objectProp: {
					myObject: true
				},
				colorProp: 'rgb(0, 0, 0)'
			}
		});

		// First transition clones model into view
		element.transition(0.25);
		expect(element._view).toEqual(element._model);
		expect(element._start).toEqual(element._model); // also cloned

		expect(element._view.objectProp).toBe(element._model.objectProp); // not cloned
		expect(element._start.objectProp).toEqual(element._model.objectProp); // not cloned

		element._model.numberProp = 100;
		element._model.numberProp2 = 250;
		element._model._underscoreProp = 200;
		element._model.stringProp = 'def'
		element._model.newStringProp = 'newString';
		element._model.colorProp = 'rgb(255, 255, 0)'

		element.transition(0.25);
		expect(element._view).toEqual({
			numberProp: 25,
			numberProp2: 137.5,
			_underscoreProp: 0, // underscore props are not transition to a new value
			stringProp: 'def',
			newStringProp: 'newString',
			objectProp: {
				myObject: true
			},
			colorProp: 'rgb(64, 64, 0)',
		});
	});
});