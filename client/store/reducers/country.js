import update from 'immutability-helper';

import {
    SET_COUNTRY
} from '_actions/country';

export default function country(state = {}, action) {
    switch (action.type) {
        case SET_COUNTRY:
            return update(state, {
                _id: { $set: action._id },
                name: { $set: action.name },
                isoCode: { $set: action.isoCode },
                continent: { $set: action.continent },
                flagUrl: { $set: action.flagUrl },
            });
        default:
            return state;
    }
}
