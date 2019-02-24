import update from 'immutability-helper';

import {
    SET_PARTY
} from '_actions/party';


export default function party(state = {}, action) {
    switch (action.type) {
        case SET_PARTY:
            return update(state, { $set: action.party });
        default:
            return state;
    }
}
