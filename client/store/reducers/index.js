import { combineReducers } from 'redux';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';
import todos from './todos';
import country from './country';
import party from './party';

const rootReducer = combineReducers({
  alerts,
  user,
  todos,
  country,
  party
});

export default rootReducer;
