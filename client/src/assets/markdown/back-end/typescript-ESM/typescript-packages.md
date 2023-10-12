# Node.js packages in TypeScript

## 1. dotenv
1. Install packages
<pre class="command-line"><code>npm i dotenv
You do not need to install @types/dotenv, as the package already has type declaration bundled.

2. Create a .env file and ignore it in your .gitignore file. You may save database credentials in your .env file. For example:
```
PASSWORD="SECRET_PASSWORD"
```

3. Import and consume dotenv in <mark>app.mts</mark>:
```typescript
import dotenv from "dotenv";
dotenv.config();
console.log(`App name is ${process.env.APP_NAME}`);
```

## 2. cors, cookie-parser and body-parser
1. Install packages
<pre class="command-line"><code>npm i cors cookie-parser body-parser
npm i -D @types/cors @types/cookie-parser @types/body-parser</code></pre>

2. Import and consume cors and cookie-parser in <mark>app.mts</mark>:
```typescript
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

/* Assuming your .env file is directly under /server, and there are directories /server/src and /server/dist for
TypeScript source code and transpiled JavaScript code, respectively */
dotenv.config({path: path.resolve(__dirname, '../.env')}); 

app.use(cors());  		// allow cross-origin resource sharing
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
```

## 3. path and url
<mark>__filename</mark> and <mark>__dirname</mark> won't work in ESM unless they are defined.
1. Install packages
<pre class="command-line"><code>npm i path url</code></pre>

2. Import and consume path and url in <mark>app.mts</mark>:
```typescript
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
```

