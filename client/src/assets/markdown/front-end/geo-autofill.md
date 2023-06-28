# Geo-validators & Autofill - Front End 

Geo-validators provide state, city and zip code autofill. They improve user experience and prevent bad data (typos) from getting into a database. 
[An example](http://161.182.32.7:5010/) is provided.
Main features:
- A user enters state abbreviation.
- After typing the first character in city field, a list of city names will be pre-populated.
- A user can use arrow keys to navigate through the list of cities, and press Enter key to select the correct city.
- If the selected city has only 1 zip code, zip code field is populated automatically; otherwise it is the same selection process as city.

Geo-validators have already been built into Angular-Node.js template in Shared Module. Key source code (on front end) are shown and explained below: 
src/app/modules/shared/form-controls/state-city-zip/state-city-zip.component.ts
```typescript
// state control valueChanges event
this.stateControl.valueChanges.subscribe({
	next: v => {
		// if state is a valid US state
		if (this.stateList.includes(v)) {
			// get city list via API call
			this.getCityList(v).subscribe(
				{
					next: data => { 
						this.cityList = data.cities; 
					},
					error: e => {console.error(e)},
					complete: () => {console.info(`City list acquisition for ${v} complete.`)}
				}
			)
		}
	},
	error: e => {console.error(e)},
	complete: () => {console.info('State value changed.')}
});
```

```typescript
// city control valueChanges event
this.cityControl.valueChanges.subscribe({
	next: v => {
		// if state is a valid US state and city is a valid US city
		if (this.stateList.includes(this.stateControl.value) && this.cityList.includes(v)) {
			this.getZipCodeList(this.stateControl.value, v).subscribe(
				{
					next: data => {
						// if there is one ZIP code for that city, auto-populate ZIP code
						if (data.zip_codes.length === 1) {
							this.zipCodeControl.setValue(data.zip_codes[0]);
						}
						this.zipCodeList = data.zip_codes;
					},
					error: e => {console.error(e)},
					complete: () => {console.info(`ZIP code list acquisition for ${v} complete.`)}
				}
			)
		}
	},
	error: e => {console.error(e)},
	complete: () => {console.info('City value changed.')}
});
```

```typescript
// filter method is startWith(), and is case-insensitive
private _filterZipCode(value: string): string[] {
	const filterValue = value;
	return this.zipCodeList.filter(option => option.startsWith(filterValue));
}
```

To use this tool in your template, 3 form controls (state, city and zip code) and 3 API services need to be passed into the state-city-zip custom component
```html
<!-- Pass 3 form controls and 3 APIs into the custom component -->
<app-state-city-zip
		[stateControl]="$any(intakeForm.controls.mailingAddressState)"
		[cityControl]="$any(intakeForm.controls.mailingAddressCity)"
		[zipCodeControl]="$any(intakeForm.controls.mailingAddressZip)"
		[getStateList]="geo.getStateList"
		[getCityList]="geo.getCityList"
		[getZipCodeList]="geo.getZipCodeList"
>
</app-state-city-zip>
```