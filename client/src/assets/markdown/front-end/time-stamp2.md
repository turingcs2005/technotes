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
		// invoke Date constructor to make a copy of the original date
			let oldDate = new Date(x); 
			let time = oldDate.getTime();
				
		// 🔑 Time zone offset is measured in milliseconds. 
		// By adding time zone offset, we change time to 12:00AM
		// Date will be correct regardless of which time zone the browser is located.
			return newDate = new Date( time + oldDate.getTimezoneOffset() * 60 * 1000);
		}

		// in your component, consume the global method on your FormGroup
		constructor(
			globalService: GlobalService
		) {}

		// change datetime
		let x = this.intakeForm.policyEffectiveDate.value;
		this.intakeForm.policyEffectiveDate.patchValue(this.globalService.updateDatetime(x));
   ```

