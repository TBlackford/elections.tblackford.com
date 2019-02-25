import { getElection } from '_api/election';
import { setElection } from '_actions/election';

import { dispatchError } from '_utils/api';

export const attemptGetElection = (country, year, type) => dispatch =>
getElection(country, year, type)
        .then(data => {
            const elections = data.elections
            dispatch(
                setElection({
                    year: elections.year,
                    electionType: elections.electionType, 
                    votingSystem: elections.votingSystem, 
                    country: elections.country, 
                    map: elections.map, 
                    totals: elections.totals
                })
            );
            
            return elections;
        })
        .catch(dispatchError(dispatch));