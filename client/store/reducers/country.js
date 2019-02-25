import update from 'immutability-helper';

import {
    SET_COUNTRY
} from '_actions/country';

export default function country(state = {}, action) {
    switch (action.type) {
        case SET_COUNTRY:
            return update(state, { $set: action.country });
        default:
            return state;
    }
}
