const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: DIST_PATH,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /src/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
					}
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css"),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	devServer: {
		contentBase: DIST_PATH,
		compress: true,
		port: 9000
	},
};