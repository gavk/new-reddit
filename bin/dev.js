const webpack = require('webpack');
const nodemon = require('nodemon');
const path = require('path');

const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);

compiler.run((err) => {
	if (err) {
		console.log('Compilation failed: ', err);
	}

	compiler.watch({}, (err) => {
		if (err) {
			console.log('Compilation failed: ', err);
		} else {
			console.log("Compilation was successfully.");
		}
	});

	nodemon({
		script: path.resolve(__dirname, '../dist/server/server.js'),
		watch: [
			path.resolve(__dirname, '../dist/server'),
			path.resolve(__dirname, '../dist/client'),
		],
	});
});