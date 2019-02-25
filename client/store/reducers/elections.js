import update from 'immutability-helper';

import {
    SET_ELECTION
} from '_actions/elections';

export default function elections(state = [], action) {

    switch (action.type) {
        case SET_ELECTION: 
            return update(state, { $set: action.elections });
        
        default:
            return state;
    }
}
