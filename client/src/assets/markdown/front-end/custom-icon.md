# Custom Icon 
If Google font does not meet your needs, you can use free svg files in your app. Here is a [video tutorial](https://www.youtube.com/watch?v=V-xg-lFhXn4).

1. Download a free (not copyright protected) .svg file.
2. Save the file to a directory under src/assets (e.g. src/app/svg/lobster.svg).
3. Add material library if it hasn't been added:
<pre class="command-line"><code>ng add @angular/material</code></pre> 
4. Import <code>MatIconModule</code> and <code>HttpClientModule</code> in your module file. (If they are not imported via another container module such as SharedModule.)
	```typescript
	/* import modules */
	import { MatIconModule } from '@angular/material/icon';
	import { HttpClientModule } from '@angular/common/http';
	...
	@NgModlue({
		...
		imports: [
			...
			MatIconModule,
			HttpClientModule
		]
	}
	)
	```
5. Import <code>MatIconRegistry</code> and <code>DomSanitizer</code> classes in your component file, instantiate them in the constructor and configure custom icon.
	```typescript
	/* import classes */
	import { MatIconRegistry } from '@angular/material/icon';
	import { DomSanitizer } from '@angular/platform-browser';
	...
	export class XXXComponent {
		constructor(
			private matIconRegistry: MatIconRegistry,
			private domSanitizer: DomSanitizer
		) {
			this.matIconRegistry.addSvgIcon(
				'lobster', // your icon name
				this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/lobster.svg') // your icon path
			)
		}
	}
	```
6. Use custom icon in your template.
	```html
	mat-icon svgIcon="lobster"></mat-icon>
	```
