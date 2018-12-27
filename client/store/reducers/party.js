import update from 'immutability-helper';
import {Map, fromJS} from 'immutable';
import * as R from 'ramda';

import {
    SET_PARTY, ADD_PARTY, UPDATE_PARTY, REMOVE_PARTY,
} from '_actions/party';


export default function party(state = [], action) {
    const index = R.findIndex(R.propEq('id', action.id), state);
    //const updatedAtIndex = { $splice: [[index, 1, country(state[index], action)]] };

    switch (action.type) {
        case SET_PARTY:
            return update(state, { $set: action.country });
        case ADD_PARTY:
            return update(state, { $push: [party(undefined, action)] });
        case UPDATE_PARTY:
            return update(state, updatedAtIndex);
        case REMOVE_PARTY:
            return update(state, { $splice: [[index, 1]] });
        default:
            return state;
    }
}
