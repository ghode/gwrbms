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

// Plugin tests
describe('Test the plugin system', function () {
	beforeEach(function () {
		Chart.plugins = [];
	});

	it('Should register plugins', function () {
		var myplugin = {};
		Chart.pluginService.register(myplugin);
		expect(Chart.plugins.length).toBe(1);

		// Should only add plugin once
		Chart.pluginService.register(myplugin);
		expect(Chart.plugins.length).toBe(1);
	});

	it('Should allow unregistering plugins', function () {
		var myplugin = {};
		Chart.pluginService.register(myplugin);
		expect(Chart.plugins.length).toBe(1);

		// Should only add plugin once
		Chart.pluginService.remove(myplugin);
		expect(Chart.plugins.length).toBe(0);

		// Removing a plugin that doesn't exist should not error
		Chart.pluginService.remove(myplugin);
	});

	it('Should allow notifying plugins', function () {
		var myplugin = {
			count: 0,
			trigger: function (chart) {
				myplugin.count = chart.count;
			}
		};
		Chart.pluginService.register(myplugin);

		Chart.pluginService.notifyPlugins('trigger', [{count: 10}]);

		expect(myplugin.count).toBe(10);
	});
});
