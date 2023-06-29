## 1. The Wolverson-Chesanek Solution
Kudos to James Wolverson 👨‍🌾 and Jeff Chesanek 🏌️‍♂️, we have a workaround to address this 'off by one day' issue. This method requires coding on database, back end and front end.
1. In MS SQL database, make sure your date column is of the right datatype (datetime) with 'Allow Nulls' set to true. If the column datatype is not correct, use the following SQL code to convert datatype:
   ```sql
	 -- set SQL column datatype
	 ALTER TABLE table_name;
	 ALTER COLUMN column_name datatype;
	 ```
2. In your node.js back end sequelize model definition, use the following JavaScript code (or TypeScript code if you use TypeScript on the back end) to set column type to 'TIMESTAMP WITHOUT TIME ZONE':
   ```javascript
		// set model field datatype
		POL_EXP_DT: {
			type: "TIMESTAMP WITHOUT TIME ZONE",
			allowNull: true
		}
	 ```
3. In your Angular front end, do the following:
	 ```typescript
		// create a global method to change datetime to 12:00AM with the correct datepart
		updateDatetime(x: Date) {
		// Invoke Date constructor to make a copy of the original date
			let oldDate = new Date(x); 
			let time = oldDate.getTime();  // This returns an integer value of the time
				
		// 🔑 Time zone offset is measured in milliseconds. 
		// By adding time zone offset, we change the time from 12:00AM 🕛 UTC to 12:00AM 🕛 Eastern.
		// Date will now be correct.
			return newDate = new Date( time + oldDate.getTimezoneOffset() * 60 * 1000);
		}

		// In your component, consume this global method on your FormGroup
		constructor(
			globalService: GlobalService
		) {}

		// Change datetime
		let x = this.intakeForm.policyEffectiveDate.value;
		this.intakeForm.policyEffectiveDate.patchValue(this.globalService.updateDatetime(x));
   ```

## 2. The SQL Solution
Alternatively, you can use SQL to change the date column from 12:00AM UTC to 12:00AM ET in a database. As a developer, you need to work with a data engineer to ensure that future date fields (e.g. dates scraped off Excel workbooks) comply with this standard.

What if a date field in a SQL table is a mix of ET and UTC? This may sound wild, but it did happen to our Lobster Boat Rater project. We didn't get to test SQL data (scraped off Excel workbooks) until the last minute when the app was going live. 'Good' production dates with ET are saved to a database by our app. These 'good' dates get mixed with 'bad' dates with UTC, which are scraped off Excel workbooks by a data engineer. Consequently, we have two types of dates&mdash;ET 12:00AM 🕛 and UTC 12:00AM 🕛&mdash;saved in a single SQL column 💩.

You can use SQL to change 'bad' dates from UTC to ET, and work with a data engineer to ensure that future dates comply with this standard.

## 3. Why the Wolverson-Chesanek Solution is highly robust?
The Wolverson-Chesanek solution displays date correctly under almost all scenarios for our apps. 
1. Scenario 1: Dates are scraped off Excel workbooks with UTC at 12:00AM 🕛.
   - Regardless of your time zone, date will be displayed correctly around the globe 🌍. Adding time zone offset will always convert UTC 12:00AM 🕛 to local 12:00AM 🕛. The date will be displayed correctly.
2. Scenario 2: A mix-up similar to the Lobster Boat Rater occurs, where scraped dates with 12:00AM 🕛 UTC and app dates with 12:00AM 🕛 ET live in the same column in a SQL table.
   - 12:00AM 🕛 UTC will have the correct date displayed. See scenario 1 explanation.
   - 12:00AM 🕛 ET, when displayed in ET time zone, will become 4:00AM 🕓 ET. The date will still be correct.
   - 12:00AM 🕛 ET, when displayed in any time zone on continental US, will have the correct date. AK (Alaska time) is 4 hours behind ET and 8 hours behind UTC, so 12:00AM 🕛 ET becomes 8:00AM ET 🕛 (after adding an 8-hour AK offset), which is then displayed as 4:00AM 🕛 AK&mdash;still the same day. 
3. Scenario 3: A mix-up of datetime saved in different time zones across continental US. The Wolverson-Chesanek solution still works wonders.
   - If someone in Alaska saves a datetime and the record is later loaded by someone in Massachusetts, date displayed is still correct. Datetime saved as 12:00AM 🕛 AK will become 4:00AM 🕓 AK (after adding a 4-hour ET offset), which translates to 8:00 AM 🕗 ET of the same day.
   - Conversely, if someone in Massachusetts saves a datetime and the record is later loaded by someone in Alaska, date displayed is also correct. Datetime saved as 12:00AM 🕛 ET will become 8:00AM 🕗 ET (after adding an 8-hour AK offset), which is displayed as 4:00AM 🕓 AK time of the same day.

## 4. Things to pay attention to when working with datetime in JavaScript and Angular
- Time creep 👻. Whichever solution you choose, beware of 'time creep'. If you load a date from database to the front end, add 4 hours to the date so it gets displayed correctly in Eastern Time, and then <mark>save it back to the database, overwriting the original date</mark>, you run the risk of 'time creep' 🐛. Each save operation moves the time by 4 hours. 6 save operations will push your date in database to the next day 😱. So this front end 'move time' solution should never be used in conjunction with save operations.
- Date() 📅 constructor (Kudos to Ryan D'entremont). When you use a datepicker in an Angular app, or type in a date such as 06/27/2023, the timestamp will always be 12:00AM local time zone. If you however call the JavaScript Date() constructor, the current time will be used. This will bring uncertainty as a user can be working anytime of the day. So the lesson is: avoid using Date() constructor on values that will be saved to database. If you have to, use the code below to avoid later display complication.
```javascript
// change timestamp to midnight
let today = new Date();
today.setHours(0, 0, 0, 0)
```
This changes hours, minute, second and millisecond to 0, hence 12:00AM 🕛, as if you had picked a date from a datepicker or typed in a date like 06/27/2023.

