import update from 'immutability-helper';

import {
    SET_ELECTIONS
} from '_actions/elections';

export default function elections(state = [], action) {

    switch (action.type) {
        case SET_ELECTIONS: 
            return update(state, { $set: action.elections });
        
        default:
            return state;
    }
}
