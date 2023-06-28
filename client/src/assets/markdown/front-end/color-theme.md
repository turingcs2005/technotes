# Color Theme

## 1. Importing stylesheet
- <mark>use</mark>: keyword for importing stylesheets
	```scss
	// always create a namespace for an imported stylesheet (e.g. mat, custom)
	@use '@angular/material' as mat; 
	@use './app/app-data/custom-color-theme' as custom;

	// use namespace prefix to access imported styles
	// creating palette from brand colors
	$primary-palette: mat.define-palette(mat.$pink-palette);
	$accent-palette: mat.define-palette(mat.$blue-palette, A200, A100, A400);

	// creating palette from custom colors
	$custom-primary-palette: mat.define-palette(custom.$hanover-primary-palette);
	$custom-accent-palette: mat.define-palette(custom.$hanover-accent-palette, A200, A100, A400);
	```
- <mark>import</mark> (deprecated): does not require a namespace
- partials
  - A partrial is an SCSS file named with a leading underscore. For example: <mark>_custom-color-theme.scss</mark>
  - The leading underscore tells sass compiler that the file is a partial file (always imported into another file), and it should not be compiled into a CSS file.

## 2. Colors
- Defining color palette from Material brand colors (pre-defined) and consuming color palette
	```scss
	// creating palette from brand colors
	$primary-palette: mat.define-palette(mat.$pink-palette);
	$accent-palette: mat.define-palette(mat.$blue-palette, A200, A100, A400);	
	// There is no need to define warning color. By default, warning message are in red.

	$colors: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900;
	@each $color in $colors {
		.primary-#{$color} {
			color: mat.get-color-from-palette($primary-palette, $color);
		}
		.accent-#{$color} {
			color: mat.get-color-from-palette($accent-palette, $color);
		}
	}
	```
- Defining [custom colors](http://mcg.mbitson.com/)
  ```scss
	$hanover-primary-palette: (
    50 : #e0e7ec,
    100 : #b3c2cf,
    200 : #809aaf,
    300 : #4d728e,
    400 : #265376,
    500 : #00355e,
    600 : #003056,
    700 : #00284c,
    800 : #002242,
    900 : #001631,
    A100 : #699aff,
    A200 : #3677ff,
    A400 : #0355ff,
    A700 : #004be9,
    contrast: (
        50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #ffffff,
        400 : #ffffff,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #ffffff,
        A400 : #ffffff,
        A700 : #ffffff,
    )
	);

	$hanover-accent-palette: (
		50 : #fef3e4,
		100 : #fce2ba,
		200 : #facf8d,
		300 : #f8bc5f,
		400 : #f7ad3c,
		500 : #f59f1a,
		600 : #f49717,
		700 : #f28d13,
		800 : #f0830f,
		900 : #ee7208,
		A100 : #ffffff,
		A200 : #ffefe3,
		A400 : #ffd1b0,
		A700 : #ffc296,
		contrast: (
				50 : #000000,
				100 : #000000,
				200 : #000000,
				300 : #000000,
				400 : #000000,
				500 : #000000,
				600 : #000000,
				700 : #000000,
				800 : #000000,
				900 : #000000,
				A100 : #000000,
				A200 : #000000,
				A400 : #000000,
				A700 : #000000,
		)
	);
	```
- Consuming custom colors
  ```scss
	// creating palette from custom colors
	$custom-primary-palette: mat.define-palette(custom.$hanover-primary-palette);
	$custom-accent-palette: mat.define-palette(custom.$hanover-accent-palette, A200, A100, A400);

	.hanover-weak {
  	color: mat.get-color-from-palette($custom-primary-palette, 500, .5); // saturation @ 50%
	}
	```
	
	## 3. Tips on colors
	- Try sticking to colors in color themes. Non-theme colors tend to make your app look gaudy. 
	- Use a single color theme (primary, accent, warn) if your app is simple.
	- You may use multiple color themes if your app is complex and can be broken up into multiple domains. For example: 5 purple pages on function 1; 6 navy pages on function 2...
