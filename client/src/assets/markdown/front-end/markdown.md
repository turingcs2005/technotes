# Serving Markdown Documentation on Front End

## Markdown resources
- [Markdown guide](https://www.markdownguide.org/)
- [ngx-markdown guide](https://jfcere.github.io/ngx-markdown/get-started)
- [mermaid guide](https://mermaid-js.github.io/mermaid/#/)

## Install packages and configure your project
1. Install 5 npm packages
<pre class="command-line"><code>npm i PACKAGE_NAME</code></pre>
	- ngx-markdown (for rendering static markdown files)
	- marked (markdown)
	- prismjs (for programming language syntax highlighting)
	- mermaid (for charting)
	- katex (for math formulas)
  Install type declaration for marked
<pre class="command-line"><code>npm i -D @types/marked</code></pre>
	
1. Edit angular.json file
	- Append code below to build/scripts:
	```javascript
	/* append code below to "script" sections */
	"node_modules/marked/marked.min.js",
	"node_modules/prismjs/prism.js",
	"node_modules/prismjs/components/prism-typescript.min.js",
	"node_modules/prismjs/components/prism-javascript.min.js",
	"node_modules/prismjs/components/prism-css.min.js",
	"node_modules/mermaid/dist/mermaid.min.js",
	"node_modules/prismjs/plugins/command-line/prism-command-line.js",
	"node_modules/katex/dist/katex.min.js",
  "node_modules/katex/dist/contrib/auto-render.min.js"
	```
	
	- Append code below to "styles" section:
	```javascript
	/* append code below to "styles" section */
	"node_modules/prismjs/themes/prism-okaidia.css",
	"node_modules/prismjs/plugins/command-line/prism-command-line.css",
	"node_modules/katex/dist/katex.min.css"
	```

2. Create your markdown files under directory <code>/src/assets/markdown/</code> (or whatever directory you prefer under <code>/src/assets/</code>)

3. In your app.module.ts file, import <code>MarkdownModule</code>, and then configure MarkdownModule in the imports array:
	```typescript
	import { NgModule } from '@angular/core';
	import { MarkdownModule } from 'ngx-markdown';

	import { AppComponent } from './app.component';

	@NgModule({
		imports: [
	   	MarkdownModule.forRoot(),
		],
		declarations: [AppComponent],
		bootstrap: [AppComponent],
	})
	export class AppModule { }
	```

In your lazy-loaded module file, import <code>MarkdownModule</code>, and then configure MarkdownModule in the imports array:
```typescript
	import { MarkdownModule } from 'ngx-markdown';
	imports: [
		MarkdownModule.forChild(),
	]
```

4. Create a component, add routing and render .md files in your template (use 'mermaid' if your markdown file uses mermaid charts; 'katex' if math formulas)
	```html
	<markdown
		mermaid
		katex
		src="PATH/assets/markdown/PATH_TO_YOUR_FILE.md">
	</markdown>
	```

5. To render mermaid chart in your markdown file, use<br>
\`\`\`mermaid<br>
YOUR CHART<br>
\`\`\`

1. To render source code, there are two options:<br>
   1. Render source code in a markdown file. You have to copy your source code to a markdown file and specify the type of the code (e.g. javascript, typescript, latex, etc.).<br>
	\`\`\`LANGUAGE<br>
	YOUR SOURCE CODE<br>
	\`\`\`<br>
	where LANGUAGE = javascript, typescript, etc. Remember to import the corresponding prism language files under "scripts" in your angular.json file. See section 2 above.
	```javascript
	/* import languae files from prism */
	"node_modules/prismjs/components/prism-typescript.min.js",
	"node_modules/prismjs/components/prism-javascript.min.js"
	```
   2. Render source code in html template by importing a source code file. (Your file extension will trigger the correct prismjs syntax highlighting, so there's no need to specify the type of code.)
	```html
	<markdown
		src="../../../assets/markdown/home/test.tex"
	></markdown>
	```

2. To render command-line commands (if you have imported command-line plugin for prism), use<br>
	```html
	<pre class="command-line"><code>YOUR COMMANDS</code></pre>
	```

3.  To render math formulas, please refer to [Katex documentation](https://katex.org/docs/api.html)