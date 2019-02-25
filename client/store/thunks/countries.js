import { snakeToCamelCase } from 'json-style-converter/es5';
import R from '_utils/ramda';

import { getCountries } from '_api/countries';
import { setCountries } from '_actions/countries';

import { dispatchError } from '_utils/api';

export const attemptGetCountries = () => dispatch =>
    getCountries()
        .then(data => {
            const country = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.country);

            dispatch(setCountries(country));
            return data.country;
        })
        .catch(dispatchError(dispatch));

