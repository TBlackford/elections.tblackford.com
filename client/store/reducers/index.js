import { combineReducers } from 'redux';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';
import countries from './countries';
import country from './country';
import election from './election';
import elections from './elections';
import party from './party';
import map from './map';

const rootReducer = combineReducers({
    alerts: alerts,
    user: user,
    country: country,
    countries: countries,
    election: election,
    elections: elections,
    party: party,
    map: map,
});

export default rootReducer;
