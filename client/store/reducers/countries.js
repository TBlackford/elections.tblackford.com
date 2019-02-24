import update from 'immutability-helper';

import {
    SET_COUNTRIES
} from '_actions/country';

export default function country(state = [], action) {
    switch (action.type) {
        case SET_COUNTRIES:
            return update(state, { $set: action.countries });
        default:
            return state;
    }
}
