import update from 'immutability-helper';

import {
    SET_MAP
} from '_actions/map';

export default function map(state = {}, action) {
    switch (action.type) {
        case SET_MAP:
            return update(state, { $set: action.map });
        default:
            return state;
    }
}
