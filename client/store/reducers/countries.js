import update from 'immutability-helper';

import {
    SET_COUNTRIES
} from '_actions/countries';

export default function countries(state = [], action) {

    switch (action.type) {
        case SET_COUNTRIES: 
            return update(state, { $set: action.countries });
        
        default:
            return state;
    }
}
