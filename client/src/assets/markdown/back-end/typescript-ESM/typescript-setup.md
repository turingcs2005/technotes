# Node.js with TypeScript Project Setup

You may clone from angular-node-typescript-template repo directly to skip all the setup steps laid out below.
<mark>git@ssh.dev.azure.com:v3/HanoverSolutionsDevelopers/Solutions%20Developers/angular-node-typescript-template</mark>

Though optional, TypeScript helps with debugging. If your back end is complex, TypeScript is strongly recommended. Sequelize hasn't fully embraced TypeScript. If your project uses Sequelize, you may want to use ESM without TypeScript.	

## 1. How TypeScript supports ES modules in Node.js
- An overview of ECMAScript modules in Node.js can be found [here](https://www.typescriptlang.org/docs/handbook/esm-node.html). <br>
- The module setting we use in our TypeScript project is <mark>NodeNext</mark>, which allows coexistence of ES modules (new standard) and CommonJS modules (old standard).
- An ES module file imposes the following rules (in contrast to a CommonJS module file):
	- <mark>import/export</mark> statements (vs. <mark>require</mark> in CommonJS) and top-level <mark>await</mark> are allowed
	- import paths need full file extensions (e.g. import "./app.js" with .js extension spelled out)

## 2. How does TypeScript resolve module for a source code file?
When TypeScript finds a file (.ts, .js), it will look into the closest <mark>package.json</mark> file (current directory &rarr; parent directory...) too see whether the file is an ES module, and use that to determine:
- How to find imported modules
- How to transform that file into output

## 3. New file extensions
- <mark>.mjs</mark>: always ES mdules, impossible to override
- <mark>.cjs</mark>: always CommonJS mdules, impossible to override
- <mark>.mts</mark>: compiler will emit .mjs
- <mark>.cts</mark>: compiler will emit .cjs
- <mark>.d.mts</mark>: declaration files generated off .mts
- <mark>.d.cts</mark>: declaration files generated off .cts

## 4. How to setup a Node.js project with TypeScript and ES module
1. Setup a Node.js project and install packages
	1. Create your back end folder (e.g. <mark>server</mark>)
	2. Create a <mark>package.json</mark>
	<pre class="command-line"><code>npm init -y</code></pre>
	3. Install types for node as a development dependency
	<pre class="command-line"><code>npm i -D @types/node</code></pre>
	4. Install TypeScript as a development dependency
	<pre class="command-line"><code>npm i -D typescript</code></pre>
	5. Install nodemon so your app is refreshed whenever changes occur to your source code
	<pre class="command-line"><code>npm i -D nodemon</code></pre>
	Obviously, you can use your globally installed TypeScript compiler/nodemon. Installing TypeScript/nodemon locally ensures that compatible verions these packages will be used after the project is cloned.

2. Configure your Node.js project. In <mark>package.json</mark>: 
	1. Change type to "module"
	2. Add script
	```json
	{
		"type": "module",  // use ES module instead of CommonJS module
		"scripts": {
			"build": "npx tsc",   // invoke TypeScript compiler to transpile TypeScript into JavaScript
			"start": "node dist/app.mjs",   // after transpilation, run the app
			"dev": "npx tsc -w & nodemon dist/app.mjs" // watch for file changes and re-serve
		}
	}
	```

3. Setup and configure your TypeScript project.
	1. Create a tsconfig.json file:
		- Option 1: use tsc
		<pre class="command-line"><code>npx tsc --init</code></pre>
		- Option 2: create an empty <mark>tsconfig.json</mark> file manually:
		<pre class="command-line"><code>touch tsconfig.json</code></pre>
	2. Configure <mark>tsconfig.json</mark>
	```json
	{
		"compilerOptions:": {
			"module": "NodeNext", // "module" option imposes limitations on what module-related input code is allowed. (e.g. 'require' is not allowed for module ES2015 or higher.) NodeNext is a new standard designed for Node's specific implementation of co-existing ES module and CommonJS module.
			"moduleResolution": "NodeNext", // "moduleResolution" option determines how Node.js will find imported modules.
			"target": "ES2022", // "target" option determines the version of JavaScript to which your TypeScript source code will be compiled.
			"sourceMap": true, // "sourceMap" is set to true so the compiled JavaScript code are mapped back to TypeScript, which helps us with debugging.
			"outDir": "dist",  // directory for compiled JavaScript code. some people use 'build'.
		},
		"include": ["src/**/*"], // tells compiler where to find TypeScript source code
	}
	```

4. Compile (transpile) a sample TypeScript file and run your app
	1. Create an app.mts file under /src and write some TypeScript code
	```typescript
	import express, { Express, Request, Response }  from "express";
	const PORT = 8000;
	
	// Note: type can be inferred. Type annotation below are optional. 
	const app: Express = express();
	app.get('/', (req: Request, res: Response) => {
		res.send('Hello, world!');
	});

	app.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}`);
	});
	```
	2. Compile TypeScript into JavaScript
	<pre class="command-line"><code>npm run build</code></pre> 

	3. Run your app (assuming you have completed step 4.2 to set up scripts in package.json file)
	<pre class="command-line"><code>npm start</code></pre>


