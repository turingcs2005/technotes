import { Request, Response} from 'express';
import { State, City } from 'country-state-city';
import { postcodeValidator } from 'postcode-validator';
import zipcodes from 'zipcodes';

// check if post code is valid US ZIP code
const validatePostCode = async (req: Request, res: Response) => {
    const postCode = req.params.postCode;
    res.status(200).send({
        valid: postcodeValidator(postCode, 'US')
    });
}

// return an array of city names for a state
const cityArray = async (req: Request, res: Response) => {
    const state = req.params.state;
    res.status(200).send({
        cities: City.getCitiesOfState('US', state).map(v => v.name)
    });
}

// return all US state name and abbreviation (50 states + DC)
const stateArray = async (req: Request, res: Response) => {
    res.status(200).send({
        states: State.getStatesOfCountry('US').map( v => ({
            abbr: v.isoCode,
            name: v.name
        /* 50 states + DC; excluding overseas territories (Guam, US Virgin Island, Puerto Rico, etc.); 
        remove filter if you need those territories */
        })).filter( u => u.abbr.length === 2 && !['AS', 'GU', 'PR', 'UM', 'VI', 'MP'].includes(u.abbr) )  
    });
}

// check if state abbreviation is a valid US state 
const validateState = async (req: Request, res: Response) => {
    const state = req.params.state;
    res.status(200).send({
        valid: State.getStatesOfCountry('US').map( v => v.isoCode).includes(state)
    });
}

// check if a city belongs to a state 
const validateCity = async (req: Request, res: Response) => {
    const state = req.params.state;
    const city = req.params.city;
    res.status(200).send({
        valid: City.getCitiesOfState('US', state).map(v => v.name).includes(city)
    });
}

// return an array of ZIP codes for a city
const zipCodeArray = async (req: Request, res: Response) => {
    const state = req.params.state;
    const city = req.params.city;
    res.status(200).send({
        zip_codes: zipcodes.lookupByName(city, state).map( x => x.zip )
    });
}

export { validatePostCode, cityArray, stateArray, validateState, validateCity, zipCodeArray }