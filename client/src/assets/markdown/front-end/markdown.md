# Serving Markdown Documentation on Front End

## Markdown resources
- [Markdown guide](https://www.markdownguide.org/)
- [ngx-markdown guide](https://jfcere.github.io/ngx-markdown/get-started)
- [mermaid guide](https://mermaid-js.github.io/mermaid/#/)

## Install ngx-markdown, prismjs, mermaid and katex
1. Install 4 npm packages <pre class="command-line"><code>npm i PACKAGE_NAME</code></pre>
	- ngx-markdown (for rendering static markdown files)
	- prismjs (for programming language syntax highlighting)
	- mermaid (for charting)
	- katex (for math formulas)
	
2. Edit angular.json file
	- Append code below to build/scripts:
	```javascript
	/* append code below to "script" sections */
	"node_modules/marked/marked.min.js",
	"node_modules/prismjs/prism.js",
	"node_modules/prismjs/components/prism-typescript.min.js",
	"node_modules/prismjs/components/prism-javascript.min.js",
	"node_modules/prismjs/components/prism-css.min.js",
	"node_modules/mermaid/dist/mermaid.min.js",
	"node_modules/prismjs/plugins/command-line/prism-command-line.js"
	```
	
	- Append code below to "styles" section:
	```javascript
	/* append code below to "styles" section */
	"node_modules/prismjs/themes/prism-okaidia.css",
	"node_modules/prismjs/plugins/command-line/prism-command-line.css"
	```

3. Create your markdown files under directory <code>/src/assets/markdown/</code> (or whatever directory you prefer under <code>/src/assets/</code>)

4. In your module file, import <code>HttpClientModule</code>, <code>MarkdownModule</code> and <code>SecurityContext</code>, and then configure MarkdownModule in the imports array:
	```typescript
	/* import MarkdownMoudle and SecuirtyContext */
	import { MarkdownModule } from 'ngx-markdown';
	import { SecurityContext } from '@angular/core';
	/* This example does not import HttpClientModule because it is widely used for making API calls and 
	is often imported via SharedModule. */
	...
	/* configure MarkdownModule in imports array */
	@NgModule({
		imports: [
			MarkdownModule.forRoot({
				sanitize: SecurityContext.NONE
			}),
			MarkdownModule.forChild()
		]
	})
	```

5. Create a component, add routing and render .md files in your template:
	```html
	<markdown
		mermaid
		src="PATH/assets/markdown/PATH_TO_YOUR_FILE.md">
	</markdown>
	```

6. To render mermaid chart in your markdown file, use<br>
\`\`\`mermaid<br>
YOUR CHART<br>
\`\`\`

7. To render source code, there are two options:<br>
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

8. To render command-line commands (if you have imported command-line plugin for prism), use<br>
	```html
	<pre class="command-line"><code>YOUR COMMANDS</code></pre>
	```

9.  To render math formulas, please refer to [Katex documentation](https://katex.org/docs/api.html)