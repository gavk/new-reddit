const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

function setupDevtool() {
	if (IS_DEV) return 'eval';
	return false;
}

module.exports = {
	entry: path.resolve(__dirname, '../src/client/index.jsx'),
	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: 'client.js',
	},
	mode: NODE_ENV ? NODE_ENV : "development",
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: ['babel-loader'],
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
	},
	devtool: setupDevtool(),
};