# Project Setup 

- You may use either JavaScript or TypeScript for your back end project
	- Use TypeScript if your back end implements a lot of business logics/calculation, as TypeScript will prevent bugs.
	- Use plain JavaScript back end if your back end mostly performs CRUD operations and consumes APIs.
- Starting with Node.js version 16, ES modules are supported natively. 
	- To use ES modules, in your global package.json file, add
	```json
	"type": "module"
	```
	- For packages (e.g. sequelize) still using CommonJS, you can override your global package.json configuration with a local package.json file (in a subdirectory such as /models) with option<br>
	```json
	"type": "commonjs"
	```
	- Use file extension '.mjs' instead of '.js' if the file uses ES module
- For packages used for development only (e.g. ts-node, @types/node, sequelize-cli), remember to use -D option while installing 
	<pre class="command-line"><code>npm i -D PACKAGE_NAME</code></pre>
- In your app.js file, use 
	```javascript
	// 🔥 Serve an angular app
	app.use(express.static(path.join(__dirname, 'dist')));
	app.all('/*', (req, res, next) => {
			res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
	});
	```

	This is a robust solution that allows 
	1. accessing different Angular routes directly (some routes shouldn't be accessed without first accessing other routes, but the convenience offered by this setup, i.e. allowing a user to access routes directly, outweighs the disadvantage of accessing routes out of order)
	2. reaching the correct file path in deployment (with __dirname variable)
	3. With this setup, front end developers need to use route guards in Angular routing module to prevent unauthorized access, as a user can paste URL in a browser address bar to directlya access an unguarded route.
