import { snakeToCamelCase } from 'json-style-converter/es5';
import R from '_utils/ramda';

import { 
    getElectorates,
    getElectoratesYear,
    getElectoratesYearType
} from '_api/electorates';
import { setElectorates } from '_actions/electorates';

import { dispatchError } from '_utils/api';

export const attemptGetElectorates = country => dispatch =>
    getElectorates(country)
        .then(data => {
            const electorates = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.electorates);

            dispatch(setElectorates(electorates));
            
            return electorates;
        })
        .catch(dispatchError(dispatch));

export const attemptGetElectoratesYear = (country, year) => dispatch =>
    getElectoratesYear(country, year)
        .then(data => {
            const electorates = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.electorates);

            dispatch(setElectorates(electorates));
            
            return electorates;
        })
        .catch(dispatchError(dispatch));

export const attemptGetElectoratesYearType = (country, year, type) => dispatch =>
    getElectoratesYearType(country, year, type)
        .then(data => {
            const electorates = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.electorates);

            dispatch(setElectorates(electorates));
            
            return electorates;
        })
        .catch(dispatchError(dispatch));
    