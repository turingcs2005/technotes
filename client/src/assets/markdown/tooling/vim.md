# Vim Editor

> Whether to use Vim is completely up to you. It takes months of practice to develop muscle memory. Experienced Vim users edit source code with improved efficiency and precision; some people hate it.

___
### Visual Studio Code Vim extension
Disable Vim's keyboard shortcuts to avoid conflict with Visual Studo Code's shortcuts. For example: <kbd><i>ctrl</i></kbd>  <kbd><i>k</i></kbd> &rarr; <kbd><i>z</i></kbd> in Visual Studio Code toggles zen mode. <kbd><i>Ctrl </i></kbd> <kbd><i>k</i></kbd> is for entering digraphs (special characters). Without disabling Vim keyboard shortcut, you won't be able to use Visual Studio Code keyboard shortcut to toggle zen mode, because <kbd><i>Ctrl</i></kbd>  <kbd><i>k</i></kbd> is intercepted by Vim. To disable <kbd><i>Ctrl</i></kbd>  <kbd><i>k</i></kbd> in Vim, add the following to your Visual Studio Code settings:
```javascript
/* disable Ctrl + k in Vim so you can use Ctrl + k in Visual Studio Code */
"vim.handleKeys": {
	"<C-k>": false
}
```
---
### Vim Modes 
- Normal mode, activated via <kbd><i>Esc</i></kbd> key
- Insert mode, activated via <kbd><i> a</i></kbd> / <kbd><i> A</i></kbd> / <kbd><i> i</i></kbd> / <kbd><i> I</i></kbd> / <kbd><i> o</i></kbd> / <kbd><i>O</i></kbd> keys
- Replace mode, activated via <kbd><i>R</i></kbd> key
- Visual modes, for text selection. There are 3 visual modes
	- standard visual mode, activated by <kbd><i>v</i></kbd> key, where you select code by characters
	- visual line mode, activated by <kbd><i>V</i></kbd> key, where you select code by lines
	- visual block mode, activated by <kbd><i>Ctrl</i></kbd>  <kbd><i>v</i></kbd>, where you text by blocks (rectangular area)
	- <kbd><i>g</i></kbd> &rarr; <kbd><i>v</i></kbd>, where you recall the last visual mode on the same selected area
- Search mode, activated via <kbd><i>/</i></kbd> (search forward), <kbd><i>?</i></kbd> (search backward); deactivate (to normal mode) via <kbd><i>/</i></kbd> &rarr; <kbd><i>Esc</i></kbd>
- Command mode, activated via <kbd><i>:</i></kbd>, where you can perform a wide variety of commands.
---
<mark>word</mark> vs. <mark>WORD</mark><br>
A <mark>word</mark> is a string consists only of, letter, number and underscore. In contrast a <mark>WORD</mark> consists of anything but whitespace. For example: 'long-term' is 3 <mark>words</mark>, but only 1 <mark>WORD</mark>. <br>
Vim key bindings involving <mark>word</mark> &amp; <mark>WORD</mark>:
- <kbd><i>w</i></kbd> / <kbd><i>W</i></kbd>: move forward by 1 <mark>word</mark> / <mark>WORD</mark>
- <kbd><i>e</i></kbd> / <kbd><i>E</i></kbd>: move to the end of <mark>word</mark> / <mark>WORD</mark>
- <kbd><i>b</i></kbd> / <kbd><i>B</i></kbd>: move backword by 1 <mark>word</mark> / <mark>WORD</mark>
---

### Vim Key Bindings
- Navigation
	- <kbd><i>k</i></kbd> / <kbd><i>j</i></kbd> / <kbd><i>h</i></kbd> / <kbd><i>l</i></kbd>: equivalent to <kbd><i>&#708;</i></kbd> / <kbd><i>&#709;</i></kbd> / <kbd><i>&#706;</i></kbd> / <kbd><i>&#707;</i></kbd> but easier to access
	- <kbd><i>z</i></kbd> <kbd><i>z</i></kbd> / <kbd><i>z</i></kbd>  <kbd><i> t </i></kbd> / <kbd><i>z</i></kbd>  <kbd><i>b</i></kbd>: shift the current line (with cursor) to the middle/ top/ bottom of screen
	- <kbd><i>Ctrl</i></kbd> <kbd><i>b</i></kbd> / <kbd><i>Ctrl</i></kbd>  <kbd><i>f</i></kbd> / <kbd><i>Ctrl</i></kbd>  <kbd><i>u</i></kbd> / <kbd><i>Ctrl</i></kbd>  <kbd><i>d</i></kbd>: move back/forward one full screen, move back/forward 1/2 screen
	- <kbd><i>0</i></kbd>: move to 1st column (can be whitespace); <kbd><i>^</i></kbd>: move to 1st non-whitespace; <kbd><i>$</i></kbd>: move to the end (can be whitespace) of the current line
	- NUMBER  <kbd><i>|</i></kbd>: move to column NUMBER, e.g. <kbd><i>5</i></kbd> &rarr; <kbd><i>|</i></kbd>
	- <kbd><i>+</i></kbd>: move to 1st non-whitespace of the next line; <kbd><i>-</i></kbd>: move to the 1st non-whitespace of the previous line
	- <kbd><i>H</i></kbd> / <kbd><i>M</i></kbd> / <kbd><i>L</i></kbd>: move to non-white space of the 1st line/middle line/last line on screen
	- <kbd><i>g</i></kbd>  <kbd><i>g</i></kbd>: move to the beginning of file; <kbd><i>G</i></kbd>: move to the end of file; <kbd><i>NUMBER</i></kbd> &rarr; <kbd><i>G</i></kbd>: move to a line, e.g. <kbd><i>2</i></kbd> &rarr; <kbd><i>5</i></kbd> &rarr; <kbd><i>G</i></kbd> moves cursor to line 25.
	- <kbd><i>w</i></kbd> / <kbd><i>W</i></kbd> / <kbd><i>e</i></kbd> / <kbd><i>E</i></kbd> / <kbd><i>b</i></kbd> / <kbd><i>B</i></kbd>: move by <mark>word</mark> or <mark>WORD</mark>. See <mark>word</mark> vs. <mark>WORD</mark> section. You can combine these keys with numbers, e.g. <kbd><i>3</i></kbd> &rarr;  <kbd><i>B</i></kbd> moves cursor back by 3 <mark>WORD</mark>s
	- <kbd><i>f</i></kbd>  CHAR: move to next CHAR on the current line; <kbd><i>F</i></kbd>  CHAR: move to previous CHAR on the current line, e.g. <kbd><i>f</i></kbd> &rarr; <kbd><i>-</i></kbd> moves cursor to the next hyphen. Unlike search buttons <kbd><i>/</i></kbd> / <kbd><i>?</i></kbd>, <kbd><i>f</i></kbd> / <kbd><i>F</i></kbd> *only works on current line*.
- Insert/append (any of the 6 keys below will activate edit mode)
	- <kbd><i>i</i></kbd>: insert before cursor 
	- <kbd><i>I</i></kbd>: insert before 1st non-whitespace character on the current line
	- <kbd><i>a</i></kbd>: append after cursor
	- <kbd><i>A</i></kbd>: append at end of the current line 
	- <kbd><i>o</i></kbd>: insert new line below the current line
	- <kbd><i>O</i></kbd>: insert new line above the current line
- Replace
	- <kbd><i>c</i></kbd>: replace text at cursor, e.g. c2w replaces the next 2 <mark>words</mark>
	- <kbd><i>C</i></kbd>: replace text from cursor to end of line
	- <kbd><i>r</i></kbd>: replace character at cursor
	- <kbd><i>R</i></kbd>: enter replace mode, so each keystroke replaces an existing character
- Delete
	- <kbd><i>x</i></kbd>: delete forward; <kbd><i>X</i></kbd>: delete backward
	- <kbd><i>d</i></kbd>: delete words or lines. For example: 
		- <kbd><i>d</i></kbd> &rarr; <kbd><i>2</i></kbd> &rarr; <kbd><i>w</i></kbd> - delete 2 words 
		- <kbd><i>d</i></kbd> &rarr; <kbd><i>2</i></kbd> &rarr; <kbd><i>d</i></kbd> - delete 2 lines
		- <kbd><i>d</i></kbd> &rarr; <kbd><i>d</i></kbd> - delete current line
	- <kbd><i>D</i></kbd>: delete from CURSOR to the end of current line (equivalent to <kbd><i>d</i></kbd> &rarr; <kbd><i>$</i></kbd>)
	- <kbd><i>NUMBER</i></kbd> &rarr; <kbd><i>s</i></kbd>: delete a fixed number of characters and enter insert mode, e.g. <kbd><i>4</i></kbd> &rarr; <kbd><i>s</i>
	- <kbd><i>S</i></kbd>: delete current line and enter insert mode (equivalent to <kbd><i>d</i></kbd> &rarr; <kbd><i>d</i></kbd> &rarr; <kbd><i>O</i></kbd>)
- Miscellaneous
	- <kbd><i>J</i></kbd>: join current line with the next line
	- <kbd><i>y</i></kbd>: yank (copy), e.g. <kbd><i>y</i></kbd> &rarr; <kbd><i>y</i></kbd> copies the current line.
	- <kbd><i>p</i></kbd>: paste after cursor; <kbd><i>P</i></kbd>: paste before cursor
	- <kbd><i>u</i></kbd>: undo; <kbd><i>Ctrl</i></kbd> <kbd><i>r</i></kbd>: redo
	- <kbd><i>%</i></kbd>: move cursor to the matching parenthesis, bracket or brace ((), [], {})
	- <kbd><i>{</i></kbd> / <kbd><i>}</i></kbd>: jump to the previous / next blank line (navigate by paragraph)
	- <kbd><i>~</i></kbd>: reverse case of selected block and move cursor to the beginning of the selection
	- <kbd><i>&gt;</i></kbd> / <kbd><i>&lt;</i></kbd>: indent / unindent selection
	- <kbd><i>.</i></kbd>: repeat the last editing command
	- Copy-paste between files
		- Copy: <kbd><i>"</i></kbd><kbd><i>*</i></kbd><kbd><i>y</i></kbd>
		- Paste: <kbd><i>"</i></kbd><kbd><i>*</i></kbd><kbd><i>p</i></kbd>
---

### Pattern Search and Substitution
- Pattern search
	- <kbd><i>/</i></kbd> &rarr; <kbd><i>PATTERN</i></kbd>: search for pattern forward
	- <kbd><i>?</i></kbd> &rarr; <kbd><i>PATTERN</i></kbd>: search for pattern backward
	- <kbd><i>n</i></kbd>: repeat search 
	- <kbd><i>N</i></kbd>: repeat search in the opposite direction
- Substitution <code>:[RANGE]s/[PATTERN]/[REPLACEMENT]/[FLAG]</code> <br>
	For example: <code>:%s/Angular/React/gc</code> searches for 'Angular' in the whole file buffer and substitutes it with 'React'. Confirmation is required.
	- [RANGE]: search range
		- %: whole file buffer; equivalent to 1,$
		- 100, 120: lines 100&ndash;120
		- ommitted: current line only
	- [FLAG]:
		- g: global (all occurrences instead of 1st occurrence)
		- c: confirm before substituting pattern
- Confirmation options *y/n/a/q/l*
	- y: substitute current occurrence
	- n: skip current
	- a: substitute all remaining
	- q: quit substitution
	- l: replace current and quit
___

### Marks
Marks allow a user to save current selection.
- Set a mark
	- <kbd><i>m</i></kbd> followed by a lowercase (for local mark) or uppercase letter (for global mark).
- Types of marks
	- a&ndash;z: local (file-specific) marks. Each file can have its own a&ndash;z marks.
	- A&ndash;Z: global marks shared by all files.
- Navigation and edit
	- <kbd><i>'</i></kbd> &rarr; <kbd><i>a</i></kbd>: jump to 1st non-whitespace character of the line with mark a
	- <kbd><i>`</i></kbd> &rarr; <kbd><i>a</i></kbd>: jump to mark a
	- <kbd><i>d</i></kbd> / <kbd><i>c</i></kbd> / <kbd><i>y</i></kbd>&rarr; <kbd><i>'</i></kbd> &rarr; <kbd><i>a</i></kbd>: delete/replace/yank from the current line to the line with mark a
	- <kbd><i>d</i></kbd> / <kbd><i>c</i></kbd> / <kbd><i>y</i></kbd>&rarr; <kbd><i>`</i></kbd> &rarr; <kbd><i>a</i></kbd>: delete/replace/yank from cursor to mark a
- Command mode
	- <code>:marks</code>: list all marks
	- <code>:marks aB</code>: list marks 'a' and 'B'
	- <code>:delmarks a</code>: delete mark a
	- <code>:delmarks aB</code>: delete marks a, B
	- <code>:delmarks a-e</code>: delete marks a, b, c, d, e
	- <code>:delmarks!</code>: delete marks a&ndash;z (marks in other file buffers won't be affected)
---

### Macros
Vim plugin in Visual Studio Code does not yet offer full macro functionalities of vanilla Vim.
- To record a macro, press <kbd><i>q</i></kbd> plus a lowercase letter (e.g. <kbd><i>a</i></kbd>), then perform some operations such as appending text.
- Press <kbd><i>q</i></kbd> again to stop recording.
- Use <kbd><i>@</i></kbd><kbd><i>a</i></kbd> to repeat the saved macro.
- To remove a single macro, just record over it with nothing.<br>

Caveat: Vim simulator for Visual Studio Code, as of version 1.25.2 at the time of writing, does not support multiline syntax in vanilla Vim. For example:
<pre class="command-line"><code>:5,10norm! @a</code></pre>
Code above executes the macro stored in register **a** on lines 5 through 10 in vanilla Vim, but they won't work in Vim plugin for VSC.

A slightly inconvenint workaround is to append command **j** (next line) to your recorded Vim macro. However, you will need to move your cursor to the first line of operation and then count the number of operations by subtracting the first line number from the last line number, and then add 1. For example:
<pre class="command-line"><code>10@a</code></pre>
Code above executes the macro stored in register **a** from the current line and the subsequent lines 10 times. 

Alternatively, a simpler solution is to use visual block mode to perform [multiline editing under visual mode](#visual-mode). 

___

### Command Mode
In addition to commands covered already, below are a list of file/buffer manipulation commands:
- <code>:q</code>: close current buffer
- <code>:w</code>: save 
- <code>:wq</code>: save and close
- <code>:q!</code>: close without saving
- <code>:qa!</code>: close all buffers without saving
- <code>:wqa</code>: save all buffers and close
- <code>:e!</code>: discard buffer and reopen file from disk
---

### Viewport
- <kbd><i>Ctrl</i></kbd><kbd><i>w</i></kbd> &rarr; <kbd><i>v</i></kbd>: split screen vertically (equivalent to :vsp under command mode)
- <kbd><i>Ctrl</i></kbd><kbd><i>w</i></kbd> &rarr; <kbd><i>s</i></kbd>: split screen horizontally
- <kbd><i>Ctrl</i></kbd><kbd><i>w</i></kbd> &rarr; <kbd><i>Ctrl</i></kbd><kbd><i>w</i></kbd>: split screen horizontally
- <kbd><i>Ctrl</i></kbd><kbd><i>w</i></kbd> &rarr; <kbd><i>q</i></kbd>: close current tab (equivalent to :q under command mode)
- <kbd><i>Ctrl</i></kbd><kbd><i>w</i></kbd> &rarr; <kbd><i>o</i></kbd>: close all but current tab
- <kbd><i>Ctrl</i></kbd><kbd><i>w</i></kbd> &rarr; <kbd><i>\=</i></kbd>: resize viewports to be of equal size
- <kbd><i>Ctrl</i></kbd><kbd><i>w</i></kbd> &rarr; <kbd><i>h</i></kbd><kbd><i>l</i></kbd><kbd><i>j</i></kbd><kbd><i>k</i></kbd>: navigate viewports 
---

### Visual Mode
- Key bindings
	- <kbd><i>u</i></kbd> / <kbd><i>U</i></kbd>: to lower/upper case
	- <kbd><i>d</i></kbd> / <kbd><i>c</i></kbd> / <kbd><i>y</i></kbd>: delete/replace/yank
	- <kbd><i>\></i></kbd><kbd><i>\<</i></kbd>: indent/unindent 
- Inserting/appending on multiple lines (example)
	1. <kbd><i>Ctrl</i></kbd><kbd><i>v</i></kbd>: activate visual block mode 
	2. <kbd><i>3</i></kbd> &rarr; <kbd><i>j</i></kbd>: go down 3 lines
	3. <kbd><i>I</i></kbd>: to insert on multiple lines
	4. <kbd><i>Ctrl</i></kbd><kbd><i>o</i></kbd>: to execute normal mode command
	5. <kbd><i>Ctrl</i></kbd><kbd><i>v</i></kbd>: reenter visual block mode
	6. <kbd><i>$</i></kbd>: move to end of lines
- Increment (example)
	1. Copy current line (with 1 as the 1st character) 5 times
	2. Move cursor on letter '1' of the 2nd line
	3. <kbd><i>Ctrl</i></kbd><kbd><i>v</i></kbd> &rarr; <kbd><i>4</i></kbd> &rarr; <kbd><i>j</i></kbd> to select all lines except line 1
	4. <kbd><i>g</i></kbd> &rarr; <kbd><i>Ctrl</i></kbd><kbd><i>a</i></kbd> to increment all numbers
