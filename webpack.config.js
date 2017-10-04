const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		filename: 'bundle.js',
		path: DIST_PATH,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'env',
						],
					}
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'sass-loader'
					],
				})
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'src/images'),
				to: 'images',
			},
		]),
		new ExtractTextPlugin('bundle.css'),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
		}),
	],
	devServer: {
		contentBase: DIST_PATH,
		compress: true,
		port: 9000
	},
};