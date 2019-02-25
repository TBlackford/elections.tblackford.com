import { snakeToCamelCase } from 'json-style-converter/es5';
import R from '_utils/ramda';

import { getElections, getElectionsYear, getElectionsYearType } from '_api/elections';
import { setElections } from '_actions/elections';

import { dispatchError } from '_utils/api';

export const attemptGetElections = country => dispatch => 
    getElections(country)
        .then(data => {
            const elections = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.elections);

            dispatch(setElections(elections));
            
            return elections;
        })
        .catch(dispatchError(dispatch));
    

export const attemptGetElectionsYear = (country, year) => dispatch => 
    getElectionsYear(country, year)
        .then(data => {
            const elections = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.elections);

            dispatch(setElections(elections));
            
            return elections;
        })
        .catch(dispatchError(dispatch));

export const attemptGetElectionsYearType = (country, year, type) => dispatch =>
    getElectionsYearType(country, year, type)
        .then(data => {
            const elections = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.elections);

            dispatch(setElections(elections));
            
            return elections;
        })
        .catch(dispatchError(dispatch));

