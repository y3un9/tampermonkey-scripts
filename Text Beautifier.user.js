// ==UserScript==
// @name         Text Beautifier
// @author       SubwaySamurai
// @include      /.*\.txt/
// ==/UserScript==

(function() {
	'use strict';

	// Your code here...
	var style = document.createElement('style')
	style.innerHTML = `
		body {
			color: #1f2328;
			background-color: #eee;
		}
		pre {
			max-width: 720px;
			margin: 20px auto;
			padding: 16px 24px;
			font-size: 18px;
			line-height: 1.6;
			background-color: #fff;
			border-radius: 24px;
		}
		@media (prefers-color-scheme: dark) {
			body {
				color: #e6edf3;
				background-color: #0d1117;
			}
			pre {
				background-color: #161b22;
			}
		}
	`
	document.head.append(style)
})();
