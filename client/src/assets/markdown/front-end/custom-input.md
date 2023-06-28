# Custom Input

Custom input component allows a developer to skip boilerplate code in a standard Reactive Form Input element, so the developer can focus on customizable code. For example: postfixed icons, custom input formats, etc. The following custom formats are built into the <mark>Angular-Node.js template project</mark>. (git\@ssh.dev.azure.com:v3/HanoverSolutionsDevelopers/Solutions%20Developers/angular-nodejs-template)
- <mark>currency</mark>: remove any non-digits and convert a number (no decimal points) into currency format. (e.g. 3000 &rarr; $3,000). Notes on currency format:
	1. Currency pipe is triggered by an Input's valueChanges() event.
	2. If data are loaded from a database, valueChanges() event is not triggerd.
	3. Database does not provide metadata on whether a number field is currency or plain number.
	4. You need to manually check if a field belongs to a list of currency fields (e.g. by field name), and then invoke currency pipe using setValue(). Otherwise numbers loaded from a database will be displayed as plain numbers.
- <mark>phone-US</mark>: add parentheses, space and hyphen to a US phone number (e.g. 8084429953 &rarr; (808) 442-9953)
- <mark>month-day</mark>: add / between month and day without year. (e.g. 0324 &rarr; 03/24, i.e. March the 24th) This format is used for dates that are year-agnostic. For example, every year starting March 1st, lobster boats in Maine start to operate for the season.
- <mark>uppercase</mark>: convert all lowercase letters to uppercase. (e.g. Hello123 &rarr; HELLO123) This format is used for inputs such as policy symbol and policy number, so data in a database have consistent format (all in uppercases) and the user is not burdened with pressing Caps Lock&mdash;even if they use lowercases, the letters they have typed will appear in uppcases.
- <mark>lowercase</mark>: the exact opposite of uppercase. We currently have no use case for this format. It is added for completeness. 