# Add a Font Family
To use additional font family in your app:
1. Download font file (.tff) from Google Fonts
2. Save the .tff file under /src/assets (e.g. /src/assets/fonts)
3. Go to your global stylesheet (/src/styles.scss) and add the following code (using FiraCode as an example)
	```css
	/* add FiraCode font family */
	@font-face {
		font-family: FiraCode;
		src: url(assets/fonts/FiraCode-Regular.tff) format('truetype');
	}

	.FiraCode {
		font-family: FiraCode;
	}
	```
4. Use *FiraCode* class anywhere in your template

