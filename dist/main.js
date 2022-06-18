/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
document.addEventListener('DOMContentLoaded', main);

function main () {
	safeOut(() => (process));
	safeOut(() => ({"A":"a"}));
	safeOut(() => ({"A":"a"}.A));
	safeOut(() => ({"A":"a"}.B));
	safeOut(() => ({"A":"a"}['A']));
	safeOut(() => ({"A":"a"}['B']));
	safeOut(() => ("development"));

	function out(str, err) {
		const p = document.createElement('p');
		p.innerText = str;
		if (err) {
			p.style = 'color: red';
		}
		document.getElementById('root').appendChild(p);
	}

	function safeOut(outFn) {
		try {
			const str = outFn();
			out(str);
		}
		catch (err) {
			console.error(err);
			out(err.message, true);
		}
	}
}
/******/ })()
;