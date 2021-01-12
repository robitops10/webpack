## Why I Configured Webpack manually:



###### Pros: 
1. By this way I can know what is going on behind the scane. 
2. The `/dist` or `/public` directory will generated by webpack on build, so nothing to do there.
3. React tool allow to directly import json file, Which dose not allow by Javascript, so React may use
	*	JS: AJAX/fetch() / NPM package: `axios`  or 
	* NodeJS:  React use NodeJS 


###### importing .json file
* If we need to import JSON File or any file into Project:
	- We have to use `fetch()` built-in method Or
	- `axiox` NPM package 	(Which Babel will compile)



###### When we configure webpack for development:
	mode: 'development'                       // => Show errors in Console,
	devtool: 'eval-cheap-module-source-map'  	// => Show Original Error File 
	devServer: {
		contentBase: destination,
		port: 9999,
		open: true,                            // => Open Browser (+By Default refresh)
		overlay: true                          // Enable WDS, Solve SDS Error
}


###### /package.json:
		...
	  "scripts": {
	    "start": "webpack serve --config webpack-config.js", 	// => Built into Browser cache
	    "build": "webpack       --config webpack-config.js" 	// => Built into project Directory. 
	  },



###### Terminal: 
    $ npm [run] start		// => Run Development Server from catche
    $ npm run build` 		// => Build /dist


