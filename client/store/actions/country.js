export const SET_COUNTRY = 'SET_COUNTRY';

export const setCountry = ({name, isoCode, continent, flagUrl}) => ({
    type: SET_COUNTRY,
    name,
    isoCode,
    continent,
    flagUrl
})
