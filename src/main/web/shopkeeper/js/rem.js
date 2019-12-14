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

;(function (doc, win, undefined) {
			var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
			recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (clientWidth === undefined) return;
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			};
			if (doc.addEventListener === undefined) return;
			win.addEventListener(resizeEvt, recalc, false);
			doc.addEventListener('DOMContentLoaded', recalc, false)
			
			})(document, window);