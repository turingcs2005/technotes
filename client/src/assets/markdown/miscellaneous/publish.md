# Publishing to NPM

### 1. Publishing a JavaScript package
1. Create a project directory and cd into it
<pre class="command-line"><code>mkdir PROJECT_NAME
cd PROJECT_NAME</code></pre>

2. (Optional) Initialize local git repo; add remote git repo; add .gitignore  
<pre class="command-line"><code>git init
git remote add origin REMOTE_GIT_URL
touch .gitignore</code></pre>
Edit your .gitignore files.

3. Initialize your npm package; (Optional) create a README.md file for documentation
<pre class="command-line"><code>npm init --scope=@YOUR_ORG -y
touch README.md</code></pre>
Edit your README.md file.

4. Create and configure your package
- Create an <code>index.js</code> file plus other files, directories, etc. as needed.
- Add <code>"type": "module"</code> to package.json if you plan on using ES module instead of CommonJS module.
	(ES module enables 'tree shaking', which removes unused code from a package.)
	Using ES module is recommended, as Node.js 16+ supports ES module natively.
- Test your module to ensure that your code work as intended
- Export artifacts (classes, functions, or even static data) from your module.
	```javascript
	module.exports = XXXX  // CommonJS module export
	// or
	export XXXX  // ES module export
	```

5. Publish your module
- Check if you are logged in
<pre class="command-line"><code>npm whoami</code></pre>
- If not, login your npm account
<pre class="command-line"><code>npm login</code></pre>
You will need to create your NPM account if you haven't done so.
- Publish your package using the appropriate access configuration (e.g. public access).
<pre class="command-line"><code>npm publish --access public</code></pre>

6. Using a published module
- Use your custom module just like any other npm module
<pre class="command-line"><code>npm i @YOUR_ORG/PROJECT_NAME</code></pre>
- Depending on your type configuration (CommonJS vs. module), use either <code>import</code> or <code>require</code> to consume your module exports.

7. Version update
- Option 1: use cli command <code>npm version UPDATE_TYPE</code>
where UPDATE_TYPE = one of the 3 values: <code>major</code>, <code>minor</code>  or <code>patch</code>.
	- <code>major</code>: your update has breaking changes
	- <code>minor</code>: your update introduces addtional artifacts 
	- <code>patch</code>: same deal as previous version except with bug fixes
<br>
- Option 2: directly edit "version" in <code>package.json</code>. <br>
The cli command is preferred because:
	- It forces you to think about update type;
	- It guarantees that version numbers are consecutive.

8. Install an updated version of a package
- Option 1: using npm-check-updates
	1. Install npm-check-updates package
	2. Run npm-check-updates
	3. Follow instructions to update all packages
- Option 2: manually update packages
  1. Remove your <code>node_modules/</code> directory
	<pre class="command-line"><code>rm -rf ./node_modules</code></pre>
	2. Remove package-lock.json file
	<pre class="command-line"><code>rm package-lock.json</code></pre>
  3. Reinstall all packages, or a specific version of a package
	<pre class="command-line"><code>npm i</code></pre>
___
### 2. Publishing a TypeScript package
- Steps 1, 2 & 3 are the same as steps 1, 2 & 3 in *Publishing a JavaScript package*.
4. Configure TypeScript
	1. Install TypeScript as development dependency
	<pre class="command-line"><code>npm i -D typescript</code></pre>
	2. Initialize a TypeScript project (note that <code>npm init</code> has no double-hyphen as in <code>tsc --init</code>)
	<pre class="command-line"><code>tsc --init</code></pre>
	3. Edit <code>tsconfig.json</code> under "compilerOptions"
		```json
		"outDir": "./dist",   
		"declaration": true,
		"target": "ES6",
		"module": "ES6"
		```
		Directory <code>/dist</code> will hold your transpiled JavaScript code, and should be ignored in .gitignore.<br>
		Property <code>"declaration": true</code> will create .d.ts declaration files (containing only type information).<br>
		Property <code>"target": "ES6"</code> All modern browsers support ES6 100%. You may go for a more recent version of JavaScript.<br>
		Property <code>"module": "ES6"</code> Starting Node.js 16, ES modules are supported natively. Use "CommonJS" if you want to ensure compatibility with certain 3rd-party packages.
5. Configure package.json
	```json
	"main": "dist/index.js",
	"types": "dist/index.d.ts",
	"files": ["/dist"],
	...
	"scripts": {
		"build": "tsc"
	}
	```
	Properties "main", "types" and "files" tell NPM your package entry point, type declaration file and directory housing transpiled code, respectively.<br>
	Property "build" tells NPM to invoke tsc to transpile TypeScipt into JavaScript.
6. Create & build your project
- Create index.ts under your root directory. Alternatively, you may use 'lib' directory for TypeScript source code following convention, but then you will need to update your configuration file accordingly.
- Create other files and directories as needed.
- Test your module to ensure that your code work as intended.
- Export artifacts
- execute <code>npm run build</code> or <code>tsc</code> to transpile your TypeScript source code into JavaScript.
7. Publish and consume your module
- These steps are similar to those in *Publishing a JavaScript package*.
- If your host app uses TypeScript, obviously you will need to configure tsconfig.json in your host app.
