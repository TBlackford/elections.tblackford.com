export const SET_PARTY = 'SET_PARTY';
export const ADD_PARTY = 'ADD_PARTY';
export const UPDATE_PARTY = 'UPDATE_PARTY';
export const REMOVE_PARTY = 'REMOVE_PARTY';
export const INCREMENT_PARTY_ID = 'INCREMENT_PARTY_ID';

export const setParty = party => ({
    type: SET_PARTY,
    party,
});