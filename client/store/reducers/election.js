import update from 'immutability-helper';

import {
    SET_ELECTION
} from '_actions/election';

export default function election(state = {}, action) {

    switch (action.type) {
        case SET_ELECTION: 
            return update(state, {
                _id: { $set: action._id },
                year: { $set: action.year },
                electionType: { $set: action.electionType },
                votingSystem: { $set: action.votingSystem },
                country: { $set: action.country },
                map: { $set: action.map },
                totals: { $set: action.totals },
            });
            
        default:
            return state;
    }
}
