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

"use strict";

module.exports = function (Chart) {

	var helpers = Chart.helpers;

	Chart.elements = {};

	Chart.Element = function (configuration) {
		helpers.extend(this, configuration);
		this.initialize.apply(this, arguments);
	};
	helpers.extend(Chart.Element.prototype, {
		initialize: function () {
			this.hidden = false;
		},
		pivot: function () {
			if (!this._view) {
				this._view = helpers.clone(this._model);
			}
			this._start = helpers.clone(this._view);
			return this;
		},
		transition: function (ease) {
			if (!this._view) {
				this._view = helpers.clone(this._model);
			}

			// No animation -> No Transition
			if (ease === 1) {
				this._view = this._model;
				this._start = null;
				return this;
			}

			if (!this._start) {
				this.pivot();
			}

			helpers.each(this._model, function (value, key) {

				if (key[0] === '_') {
					// Only non-underscored properties
				}

				// Init if doesn't exist
				else if (!this._view.hasOwnProperty(key)) {
					if (typeof value === 'number' && !isNaN(this._view[key])) {
						this._view[key] = value * ease;
					} else {
						this._view[key] = value;
					}
				}

				// No unnecessary computations
				else if (value === this._view[key]) {
					// It's the same! Woohoo!
				}

				// Color transitions if possible
				else if (typeof value === 'string') {
					try {
						var color = helpers.color(this._model[key]).mix(helpers.color(this._start[key]), ease);
						this._view[key] = color.rgbString();
					} catch (err) {
						this._view[key] = value;
					}
				}
				// Number transitions
				else if (typeof value === 'number') {
					var startVal = this._start[key] !== undefined && isNaN(this._start[key]) === false ? this._start[key] : 0;
					this._view[key] = ((this._model[key] - startVal) * ease) + startVal;
				}
				// Everything else
				else {
					this._view[key] = value;
				}
			}, this);

			return this;
		},
		tooltipPosition: function () {
			return {
				x: this._model.x,
				y: this._model.y
			};
		},
		hasValue: function () {
			return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
		}
	});

	Chart.Element.extend = helpers.inherits;

};
