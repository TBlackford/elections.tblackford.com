import { snakeToCamelCase } from 'json-style-converter/es5';
import R from '_utils/ramda';

import { getParty, postParty, putParty, deleteParty } from '_api/party';
import { setParty, addParty, updateParty, removeParty } from '_actions/party';

import { dispatchError } from '_utils/api';

export const attemptGetParty = () => dispatch =>
  getParty()
    .then(data => {
      const party = R.map(p =>
        R.omit(['Id'], R.assoc('id', p._id, snakeToCamelCase(p))), data.party);

      dispatch(setParty(party));
      return data.party;
    })
    .catch(dispatchError(dispatch));

export const attemptAddParty = ({ id, name, iso_code, continent, flag_url }) => dispatch =>
  postParty({ id, name, iso_code, continent, flag_url })
    .then(data => {
      const party = R.omit(['Id'], R.assoc('id', data.party._id, snakeToCamelCase(data.party)));

      dispatch(addParty(party));
      return data.user;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdateParty = ({ id, name, iso_code, continent, flag_url }) => dispatch =>
  putParty({ id, name, iso_code, continent, flag_url })
    .then(data => {
      dispatch(updateParty({ id, name, iso_code, continent, flag_url }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptDeleteParty = id => dispatch =>
  deleteParty({ id })
    .then(data => {
      dispatch(removeParty(id));
      return data;
    })
    .catch(dispatchError(dispatch));
