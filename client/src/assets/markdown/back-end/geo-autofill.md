# Geo-validators & Autofill - Back End

The following packages need to be installed on the back end, off which the API services for geo-autofill are built.
- zipcodes
- postcode-validators
- country-state-city

Please note that these npm packages provide information for the whole world, not just the United States.

Controllers
```javascript
// check if postal code is a valid US ZIP code
exports.validatePostCode = (req, res) => {
    const postCode = req.params.postCode;
    res.status(200).send({
        valid: postcodeValidator(postCode, 'US')
    });
}

// return an array of city names for a state
exports.cityArray = (req, res) => {
    const state = req.params.state;
    res.status(200).send({
        cities: City.getCitiesOfState('US', state).map(v => v.name)
    });
}

// return all US state name and abbreviation (50 states + DC)
exports.stateArray = (req, res) => {
    res.status(200).send({
        states: State.getStatesOfCountry('US').map( v => ({
            abbr: v.isoCode,
            name: v.name
        /* 50 states + DC; excluding overseas territories (Guam, US Virgin Island, Puerto Rico, etc.); 
        remove filter if you need those overseas territories */
        })).filter( u => u.abbr.length === 2 && !['AS', 'GU', 'PR', 'UM', 'VI', 'MP'].includes(u.abbr) )  
    });
}

// check if state abbreviation is a valid US state 
exports.validateState = (req, res) => {
    const state = req.params.state;
    res.status(200).send({
        valid: State.getStatesOfCountry('US').map( v => v.isoCode).includes(state)
    });
}

// check if a city belongs to a state 
exports.validateCity = (req, res) => {
    const state = req.params.state;
    const city = req.params.city;
    res.status(200).send({
        valid: City.getCitiesOfState('US', state).map(v => v.name).includes(city)
    });
}

// return an array of ZIP codes for a city 
exports.zipCodeArray = (req, res) => {
    const state = req.params.state;
    const city = req.params.city;
    res.status(200).send({
        zip_codes: zipcodes.lookupByName(city, state).map( x => x.zip )
    });
}
```