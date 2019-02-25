import { snakeToCamelCase } from 'json-style-converter/es5';
import R from '_utils/ramda';

import { getCountry } from '_api/country';
import { setCountry } from '_actions/country';

import { dispatchError } from '_utils/api';

export const attemptGetCountry = country => dispatch =>
    getCountry(country)
        .then(data => {
            const { 
                _id,
                name,
                isoCode,
                continent,
                flagUrl 
            } = data.country;

            dispatch(
                setCountry({
                    _id,
                    name,
                    isoCode,
                    continent,
                    flagUrl
                })
            );
            return data.country;
        })
        .catch(dispatchError(dispatch));
