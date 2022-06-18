document.addEventListener('DOMContentLoaded', main);

function main () {
	safeOut(() => (process));
	safeOut(() => (process.env));
	safeOut(() => (process.env.A));
	safeOut(() => (process.env.B));
	safeOut(() => (process.env['A']));
	safeOut(() => (process.env['B']));
	safeOut(() => (process.env.NODE_ENV));

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