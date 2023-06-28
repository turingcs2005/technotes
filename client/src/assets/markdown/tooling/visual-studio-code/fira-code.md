# Fira Code Font
Fira Code improves source code readability and mitigates bugs by properly displaying multi-character symbols.

To install Fira Code in Windows:
1. Download *Fira Code* from [Google Font](https://fonts.google.com/)
2. Extract to produce file *FiraCode-Regular.ttf*
3. Go to *Control Panel* &rarr; *Font* &rarr; drop *FiraCode-Regular.ttf*
4. Laucnh *Visual Studio Code* &rarr; Ctrl + Shift + p &rarr; *Settings (JSON)*
5. Edit your configuration file by adding the following:
```javascript
/* add to your Visual Studio Code configuration */
"editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",  // or whatever font family you prefer
"editor.fontLigatures": true,
```
