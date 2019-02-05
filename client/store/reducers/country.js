import update from 'immutability-helper';
import {Map, fromJS} from 'immutable';
import * as R from 'ramda';

import { LOGOUT_USER } from '_actions/user';

import {
    SET_COUNTRY, SET_ALL_COUNTRY, ADD_COUNTRY, UPDATE_COUNTRY, REMOVE_COUNTRY,
} from '_actions/country';

export default function country(state = [], action) {
    const index = R.findIndex(R.propEq('id', action.id), state);
    //const updatedAtIndex = { $splice: [[index, 1, country(state[index], action)]] };

    switch (action.type) {
        case SET_COUNTRY:
            return update(state, { $set: action.country });
        case SET_ALL_COUNTRY:
            return update(state, { $set: action.country });
        case ADD_COUNTRY:
            return update(state, { $push: [country(undefined, action)] });
        case UPDATE_COUNTRY:
            return update(state, updatedAtIndex);
        case REMOVE_COUNTRY:
            return update(state, { $splice: [[index, 1]] });
        default:
            return state;
    }
}
