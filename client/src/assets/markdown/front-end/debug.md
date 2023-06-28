# Front End Development/Debugging Tips

1. Use <code>ng serve</code><br>
<code>ng serve</code> monitors file changes and serves an Angular application from a local CLI development server. Any changes made to your app are captured and reflected instantaneously on the UI. This avoids starting and stopping the server repeatedly. All build artifacts (files created in your <code>/dist</code> folder after <code>ng build</code>) are saved in memory for a fast development experience.

2. Enable <code>cors()</code> on back end<br>
Enable <code>cors()</code> during development on back end so front end served with <code>ng serve</code> can access back end services directly. As mentioned above, <code>ng serve</code> uses a local CLI development server, not your Node.js back end. Without <code>cors()</code>, a back end serves APIs only to applications originating from its own domain (e.g. <code>localhost:4455</code>).
	1. install cors() on back end
		<pre class="command-line"><code>npm i cors</code></pre>

	2. import cors() in your <code>app.js</code> file and use it as a middleware
		```javascript
		/* use cors as a middleware */
		const cors = require('cors');
		app.use(cors());
		```
	3. <mark>Remember to Disable cors() in production</mark>. Most of our apps employ a monolithic architecture. A typical Node.js back end serves APIs only to API calls originating from its own domain.

3. Align your back end default port and front end API domain (often called <code>baseUrl</code> in your <code>environment.ts</code> file)

	1. In your back end <code>/bin/www</code> file (or whichever file in which you configure your default port), choose a unique port number (e.g. 5201. There are 65,535 ports on a computer and only a handful developers on our team. It's highly unlikely that two developers will happen to use the same port for development/test at the same time).
	```javascript
	var port = normalizePort(process.env.PORT || '5201');
	app.set('port', port);
	```
	2. Create a 'local' environment on your front end.
	In your angular.json configuration file, add
	```json
	"local": {
		"buildOptimizer": false,
		"optimization": false,
		"vendorChunk": true,
		"extractLicenses": false,
		"sourceMap": true, // set sourceMap to true so you can use Angular DevTools or chrome debugger to view source code.
		"namedChunks": true,
		"fileReplacements": [
			{
				"replace": "src/environments/environment.ts",
				"with": "src/environments/environment.local.ts"
			}
		]
	}
	```	

	```json
	"local": {
		"browserTarget": "client:build:local"
	}
	```

	```json
	"defaultConfiguration": "local"
	```
	
  	3. Create a separate environment file <code>/src/environments/environment.local.ts</code>
	```typescript
	export const environment = {
		production: false,
		baseUrl: 'http://localhost:5201'
	};
	```
	Make sure port numbers in your <code>/server/bin/www</code> (back end) and <code>/client/src/environments/environment.local.ts</code> (front end) match (i.e. both are 5201).

4. Launch your back end using <code>node ./bin/www</code>. Your APIs will be served on port 5201 of localhost. With <code>cors</code> enabled, front end served by Angular CLI development server will be able to access your back end APIs.

5. Launch your front end using <code>ng serve --port=xxxx</code>. You can choose whatever unused port number for your front end.<br>
If you haven't set the default configuration to 'local', you will need to use <code>ng serve --port=xxxx -c=local</code>, as the default environment for <code>ng serve</code> is development. We reserve development environment for testing an app in Azure's development environment, not localhost.

6. Forward both ports (front end and back end) from Linux Virtual Machine to your laptop in Visual Studio Code. (use PORTS tab)
***

- Use [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh?hl=en-US) 
Google Chrome plugin.
	- Use profiler to monitor app performance
	- Use component inspector to map your source code to your UI

	You need to <mark>enable sourcemap</mark> in your angular.json configuration or you will not be able to see your TypeScript source code, as they have been compiled into JavaScript code.


