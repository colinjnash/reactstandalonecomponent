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
			{
				test: /\.(png|jp(e*)g|svg)$/,  
				use: [{
					loader: 'url-loader',
					options: { 
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]'
					} 
				}]
			}
		],
	},
	output: {
		path: path.resolve(__dirname,' build'),
		publicPath:'assets/',
		filename: 'bundle.js',
	}
};