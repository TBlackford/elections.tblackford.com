export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_SPECIFIC_COUNTRY = 'SET_SPECIFIC_COUNTRY';
export const SET_COUNTRY_YEARS = 'SET_COUNTRY_YEARS';
export const SET_COUNTRY_YEAR_ELECTION = 'SET_COUNTRY_YEAR_ELECTION';
export const SET_ALL_COUNTRY = "SET_ALL_COUNTRY";
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY';
export const INCREMENT_COUNTRY_ID = 'INCREMENT_COUNTRY_ID';

export const setCountry = country => ({
    type: SET_COUNTRY,
    country,
});

export const setSpecificCountry = ({name, isoCode, continent, flagUrl, elections}) => ({
    type: SET_SPECIFIC_COUNTRY,
    name,
    isoCode,
    continent,
    flagUrl,
    elections
})

export const setAllCountry = country => ({
    type: SET_ALL_COUNTRY,
    country,
});

export const setCountryYears = years => ({
    type: SET_COUNTRY_YEARS,
    years,
});

export const setCountryYearElection = ({year, votingSystem, totals}) => ({
    type: SET_COUNTRY_YEAR_ELECTION,
    year,
    votingSystem,
    totals
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
