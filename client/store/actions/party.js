export const SET_PARTY = 'SET_PARTY';
export const ADD_PARTY = 'ADD_PARTY';
export const UPDATE_PARTY = 'UPDATE_PARTY';
export const REMOVE_PARTY = 'REMOVE_PARTY';
export const INCREMENT_PARTY_ID = 'INCREMENT_PARTY_ID';

export const setParty = party => ({
    type: SET_PARTY,
    party,
});

export const addParty = ({ id, name, colour }) => ({
    type: ADD_PARTY,
    id,
    name,
    colour
});

export const updateParty = ({ id, name, colour }) => ({
    type: UPDATE_PARTY,
    id,
    name,
    colour
});

export const removeParty = id => ({
    type: REMOVE_PARTY,
    id,
});
