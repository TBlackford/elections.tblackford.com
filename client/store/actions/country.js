export const SET_COUNTRY = 'SET_COUNTRY';
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY';
export const INCREMENT_COUNTRY_ID = 'INCREMENT_COUNTRY_ID';

export const setCountry = country => ({
    type: SET_COUNTRY,
    country,
});

export const setAllCountry = country => ({
    type: SET_ALL_COUNTRY,
    country,
});


export const addCountry = ({ id, name, iso_code, continent, flag_url }) => ({
    type: ADD_COUNTRY,
    id,
    name,
    iso_code,
    continent,
    flag_url,
});

export const updateCountry = ({ id, name, iso_code, continent, flag_url }) => ({
    type: UPDATE_COUNTRY,
    id,
    name,
    iso_code,
    continent,
    flag_url,
});

export const removeCountry = id => ({
    type: REMOVE_COUNTRY,
    id,
});
