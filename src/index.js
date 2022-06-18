document.addEventListener('DOMContentLoaded', main);

function main() {
	let replaced = globalThis.process;
	const missingKeys = [];
	const target = {};
	const env = new Proxy(target, {
		get(_, key) {
			if (key in target || typeof key === 'symbol') {
				return target[key];
			}
			console.log('Missing key', key);
			missingKeys.push(String(key));
			return undefined;
		},
	});
	globalThis.process = { env };

	try {
		doLoadEnv();
	} finally {
		globalThis.process = replaced;
	}

	out(`missing keys: ${missingKeys.join(', ')}`);
}

function doLoadEnv() {
	safeOut(() => process);
	safeOut(() => process.env);
	safeOut(() => process.env.A);
	safeOut(() => process.env.B);
	safeOut(() => process.env['A']);
	safeOut(() => process.env['B']);
	safeOut(() => process.env.NODE_ENV);
}

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
	} catch (err) {
		console.error(err);
		out(err.message, true);
	}
}

function onTheServer() {
	console.log(process.env.DB_CONNECTION);
}
