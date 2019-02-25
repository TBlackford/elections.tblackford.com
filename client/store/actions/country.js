export const SET_COUNTRY = 'SET_COUNTRY';

export const setCountry = ({_id, name, isoCode, continent, flagUrl}) => ({
    type: SET_COUNTRY,
    _id,
    name,
    isoCode,
    continent,
    flagUrl
})
