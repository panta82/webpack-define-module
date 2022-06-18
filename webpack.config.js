const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: false,
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': JSON.stringify({ A: 'a' }),
			// 'process.env.A': JSON.stringify('a'),
			// 'process.env.NODE_ENV': JSON.stringify('development')
		}),
	],
};
