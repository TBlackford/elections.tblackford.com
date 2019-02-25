import { getElection } from '_api/election';
import { setElection } from '_actions/election';

import { dispatchError } from '_utils/api';

export const attemptGetElection = (country, year, type) => dispatch =>
getElection(country, year, type)
        .then(data => {
            dispatch(setElection(elections));
            
            return elections;
        })
        .catch(dispatchError(dispatch));