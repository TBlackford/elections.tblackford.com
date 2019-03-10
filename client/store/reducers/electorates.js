import update from 'immutability-helper';

import {
    SET_ELECTORATES
} from '_actions/electorates';

export default function electorates(state = [], action) {

    switch (action.type) {
        case SET_ELECTORATES: 
            return update(state, { $set: action.electorates });
        
        default:
            return state;
    }
}
