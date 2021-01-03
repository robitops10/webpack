const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');


const destination = path.resolve( __dirname, 'dist');

module.exports = {
	mode: 'development',
	devServer: {
		contentBase: destination,
		port: 9999,
		open: true 																						// => Open Browser (+By Default refresh)
	},

	entry: './src/index.js',
	output: {
		path: destination,
		filename: 'main.js'
	},
	module: {
		rules: [
			{ 
				test: /\.css/, 
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(js|jsx)/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
 	          presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new htmlWebpackPlugin({
			title: 'Home',
			template: './src/template/template.html',
			favicon: './src/template/favicon.ico',
			minify: false,
			filename: 'index.html'
		})
	]
};
