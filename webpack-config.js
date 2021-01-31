const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

/*
+-------------------------------------[ System Limit Error ]----------------------------------------+
|																																																		|
| If build Process cross system default file read limit: to increase read file size: 								|
|																																																		|
| 		$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p 		|
| 		$ npm start 																																									|
|																																																		|
| - More Linux.txt 	[ Max File Read Error ] 																												|
|																																																		|
+---------------------------------------------------------------------------------------------------+

- One More thing: Javascript can't directly read System level file so 	
		 import json from './file.json' throw error 					// But React have, may be use NodeJS or fetch API

*/

const destination = path.resolve( __dirname, 'dist');

module.exports = {
	mode: 'development', 																		// Show Error in Console Too, Easy to Detact than Browser
	devtool: 'eval-cheap-module-source-map', 								// Show Original Error File#Number insted of build File#number

	devServer: {
		contentBase: destination,
		port: 9999,
		open: true,																						// => Open Browser (+By Default refresh)
		overlay: true, 																				// Enable WDS, Solve SDS Error
		historyApiFallback: true 															// Enabling Client Routing, by disabled Server Routing
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
				exclude: /node_modules/,
				test: /\.(js|jsx)/,
				use: {
					loader: 'babel-loader',
					options: {
 	          presets: ['@babel/preset-env', '@babel/preset-react'],
 	          plugins: ['@babel/plugin-transform-runtime']
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
