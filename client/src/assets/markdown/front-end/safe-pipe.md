# Safe Piple
To render contents from another domain such as a Power BI dashboard in an Angular app, Check out 
[safe piple](https://www.npmjs.com/package/safe-pipe)

To implement safe pipe:
1. Install safe pipe on the front end. <pre class="command-line"><code>npm i safe-pipe</code></pre>

2. Import <code>SafePipeModule</code> in your module file and add it to your imports array.
	```typescript
	/* import SafePipe */
	import { SafePipeModule } from 'safe-pipe';
	...
	@ngModule({
		...
		imports: [SafePipeModule];
		...
	})
	```

3. Use iframe to import external resource 
	```html
	<iframe [src]="url | safe: 'resourceUrl'"></iframe>
	```
Where <mark>url</mark> is the external (e.g. PowerBI) URL. <mark>url</mark> can be manipulated programmatically to configure URL parameters or query parameters.
- URL parameter example: <code> https://.../:state/:city</code>
- query parameter example: <code>https://...?state=STATE&city=CITY</code>