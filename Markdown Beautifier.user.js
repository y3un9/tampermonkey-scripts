// ==UserScript==
// @name         Markdown Beautifier
// @author       SubwaySamurai
// @include      /.*\.md/
// ==/UserScript==

(function() {
    'use strict';

		var style = document.createElement('style')
		style.innerHTML = `
			pre {
				font-size: 14px;
			}
		`
		document.head.append(style)
})();
