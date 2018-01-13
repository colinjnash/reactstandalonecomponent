const path = require('path');

module.exports = {
	entry: __dirname + '/src/Index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: [],
					presets: ['react', 'es2015', 'stage-1']
				}
			},
		],
	},
	output: {
		path: path.resolve(__dirname,' build'),
		publicPath:'assets/',
		filename: 'bundle.js',
	}
};