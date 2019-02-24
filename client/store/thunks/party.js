import { snakeToCamelCase } from 'json-style-converter/es5';
import R from '_utils/ramda';

import { getParty } from '_api/party';
import { setParty } from '_actions/party';

import { dispatchError } from '_utils/api';

export const attemptGetParty = () => dispatch =>
    getParty()
        .then(data => {
            const party = R.map(p =>
                R.omit(['Id'], R.assoc('id', p._id, snakeToCamelCase(p))), data.party);

            dispatch(setParty(party));
            return data.party;
        })
        .catch(dispatchError(dispatch));
