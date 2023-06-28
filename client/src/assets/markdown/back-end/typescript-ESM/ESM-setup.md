# Node.js with ESM (without TypeScript)

1. Setup a Node.js project and install packages
	1. Create your back end folder (e.g. <mark>server</mark>)
	2. Create a <mark>package.json</mark>
	<pre class="command-line"><code>npm init -y</code></pre>
	3. Install packages
	<pre class="command-line"><code>npm i express cors cookie-parser sequelize dotenv</code></pre>
	<pre class="command-line"><code>npm i -D nodemon sequelize-cli</code></pre>

2. Configure your Node.js project. In <mark>package.json</mark>: 
	```json
	{
		"type": "module",  // use ES module instead of CommonJS module
		"scripts": {
			"start": "node app.mjs",   // after transpilation, run the app
			"dev": "nodemon app.mjs" // watch for file changes and re-serve
		}
	}
	```

3. Create app.mjs and .env under root directory
(In addition, you may create .gitignore and initialize git repository.)
```javascript
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
	res.status(200).send('Hello, world!');
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
```

