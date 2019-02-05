import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

const foo = (country, year) => {
    console.log(country);
    return request.get('/api/country/' + country + '/' + year)
        .then(handleSuccess)
        .catch(handleError)
}

export const postCountry = info =>
    request.post('/api/country')
        .send(info)
        .then(handleSuccess)
        .catch(handleError);

export const getCountry = () =>
    request.get('/api/country')
        .then(handleSuccess)
        .catch(handleError);

export const getAllCountry = () =>
    request.get('/api/country/all')
        .then(handleSuccess)
        .catch(handleError);

export const getSpecificCountry = (country) =>
    request.get('/api/country/' + country)
        .then(handleSuccess)
        .catch(handleError);

export const getCountryYear = (country, year) => 
    request.get('/api/country/' + country + '/' + year)
        .then(handleSuccess)
        .catch(handleError);

export const getCountryYearElection = (country, year, election) =>
    request.get('/api/country/' + country + '/' + year + '/' + election)
        .then(handleSuccess)
        .catch(handleError);
    
export const putCountry = info =>
    request.put('/api/country')
        .send(info)
        .then(handleSuccess)
        .catch(handleError);

export const deleteCountry = info =>
    request.delete('/api/country')
        .send(info)
        .then(handleSuccess)
        .catch(handleError);
