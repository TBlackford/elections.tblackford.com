import { snakeToCamelCase } from 'json-style-converter/es5';
import R from '_utils/ramda';

import { getCountries } from '_api/countries';
import { setCountries } from '_actions/countries';

import { dispatchError } from '_utils/api';

export const attemptGetCountries = () => dispatch =>
    getCountries()
        .then(data => {
            const countries = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.countries);

            dispatch(setCountries(countries));
            
            return countries;
        })
        .catch(dispatchError(dispatch));

