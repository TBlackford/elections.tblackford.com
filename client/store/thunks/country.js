import { snakeToCamelCase } from 'json-style-converter/es5';
import R from '_utils/ramda';

import { getCountry, getAllCountry, getSpecificCountry, getCountryYear, getCountryYearElection, putCountry, deleteCountry } from '_api/country';
import { setCountry, setSpecificCountry, setCountryYears, setCountryYearElection, setAllCountry, addCountry, updateCountry, removeCountry } from '_actions/country';

import { dispatchError } from '_utils/api';

export const attemptGetCountry = () => dispatch =>
    getCountry()
        .then(data => {
            const country = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.country);

            dispatch(setCountry(country));
            return data.country;
        })
        .catch(dispatchError(dispatch));

export const attemptGetAllCountry = () => dispatch =>
    getAllCountry()
        .then(data => {
            const country = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.country);

            dispatch(setAllCountry(country));
            return data.country;
        })
        .catch(dispatchError(dispatch));

export const attemptGetSpecificCountry = country => dispatch => 
    getSpecificCountry(country)
        .then(data => {
            const country = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.country);

            dispatch(setSpecificCountry(country.name, country.isoCode, country.continent, country.flagUrl, country.elections));
            return data.country;
        })
        .catch(dispatchError(dispatch));

export const attemptGetCountryYear = ({country, year}) => dispatch => 
    getCountryYear(country, year)
        .then(data => {            
            const years = R.map(c => 
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.years     
            );

            dispatch(setCountryYears(years));
            return data.years;
        })
        .catch(dispatchError(dispatch));

export const attemptGetCountryYearElection = ({country, year, election}) => dispatch => 
    getCountryYearElection(country, year, election.split('_').join(' '))
        .then(data => {
            dispatch(setCountryYearElection(
                {
                    year: data.election.year,
                    votingSystem: data.election.votingSystem,
                    totals: data.election.totals
                }
            ));
            
            return data.election;
        })
        .catch(dispatchError(dispatch));

export const attemptAddCountry = ({ id, name, iso_code, continent, flag_url }) => dispatch =>
    postCountry({ id, name, iso_code, continent, flag_url })
        .then(data => {
            const country = R.omit(['Id'], R.assoc('id', data.country._id, snakeToCamelCase(data.country)));

            dispatch(addCountry(country));
            return data.user;
        })
        .catch(dispatchError(dispatch));

export const attemptUpdateCountry = ({ id, name, iso_code, continent, flag_url }) => dispatch =>
    putCountry({ id, name, iso_code, continent, flag_url })
        .then(data => {
            dispatch(updateCountry({ id, name, iso_code, continent, flag_url }));
            return data;
        })
        .catch(dispatchError(dispatch));

export const attemptDeleteCountry = id => dispatch =>
    deleteCountry({ id })
        .then(data => {
            dispatch(removeCountry(id));
            return data;
        })
        .catch(dispatchError(dispatch));
