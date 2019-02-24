import { snakeToCamelCase } from 'json-style-converter/es5';
import R from '_utils/ramda';

import { getCountry } from '_api/country';
import { setCountry } from '_actions/country';

import { dispatchError } from '_utils/api';

export const attemptGetCountry = country => dispatch =>
    getCountry(country)
        .then(data => {
            const country = R.map(c =>
                R.omit(['Id'], R.assoc('id', c._id, snakeToCamelCase(c))), data.country);

            dispatch(setCountry(country.name, country.isoCode, country.continent, country.flagUrl));
            return data.country;
        })
        .catch(dispatchError(dispatch));
