// ==UserScript==
// @name         Text A4
// @author       SubwaySamurai
// @include      /.*\.txt/
// ==/UserScript==

(function () {
	'use strict';

	var style = document.createElement('style')
	style.innerHTML = `
		* {
			box-sizing: border-box;
		}
		body {
			margin: 0;
			padding: 0;
			color: #1f2328;
			background-color: #eee;
		}
		pre {
			width: 21cm;
			min-height: 29.7cm;
			margin: 1cm auto;
			padding: 2cm;
			font-family: sans-serif;
			font-size: 12pt;
			background-color: #fff;
			border: 1px solid #d0d7de;
			border-radius: 5px;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
		}
		@media (prefers-color-scheme: dark) {
			body {
				color: #e6edf3;
				background-color: #0d1117;
			}
			pre {
				background-color: #161b22;
				border-color: #30363d;
			}
		}
	`
	document.head.append(style)
})();