const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
	entry: path.resolve(__dirname, 'src/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	mode: NODE_ENV ? NODE_ENV : "development",
};