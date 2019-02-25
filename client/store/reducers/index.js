import { combineReducers } from 'redux';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';
import countries from './countries';
import country from './country';
import party from './party';

const rootReducer = combineReducers({
    alerts: alerts,
    user: user,
    country: country,
    countries: countries,
    party: party
});

export default rootReducer;
