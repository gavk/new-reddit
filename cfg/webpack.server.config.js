const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
	target: 'node',
	entry: path.resolve(__dirname, '../src/server/server.js'),
	output: {
		path: path.resolve(__dirname, '../dist/server'),
		filename: 'server.js',
	},
	resolve: {
		extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: ['ts-loader'],
			}
		]
	},
	mode: NODE_ENV ? NODE_ENV : 'development',
};