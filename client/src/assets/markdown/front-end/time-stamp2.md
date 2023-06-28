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
___

Alternatively, you can use SQL to change the data column from 12:00AM UTC Time to 12:00AM Eastern Time in a database. As a developer, you need to work with a data engineer to ensure that future date fields (e.g. dates scraped off Excell workbooks) comply to this standard.
___

What if a date field in a SQL table is a mix of Eastern Time Zone and UTC Time Zone? This may sound wild, but it did happen to our Lobster Boat Rater project. We didn't get to test SQL data (scraped off Excel workbooks) until the last minute when the app was going live, and 'good' production dates with Eastern Time Zone are already entered via the app by a user and saved to a SQL database, where they get mixed with 'bad' dates with UTC Time Zone. 

You can obviously use SQL to conditionally change your 'bad' dates from UTC Time Zone to Eastern Time Zone, and work with a data engineer to ensure that future dates comply to this standard.

Without changing time in a SQL data, the method recommended by James and Jeff will still work. 12:00AM 🕛 Eastern Time will 4 hours added will become 4:00AM 🕓 Eastern Time. The date will still be correct.
___

Whichever solution you choose, beware of 'time creep'. If you load a date from database to the front end, add 4 hours to the date so it gets displayed correctly in Eastern Time, and then <mark>save it back to the database, overwriting the original date</mark>, you run the risk of 'time creep'. Each save operation moves the time by 4 hours. 6 save operations will push your date in database to the next day 😱😱😱. So this front end 'move time' solution should never be used in conjunction with save operations.

