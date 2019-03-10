import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getElectorates = country =>
    request.get('/api/electorates/' + country)
        .then(handleSuccess)
        .catch(handleError);

export const getElectoratesYear = ( country, year ) =>
    request.get('/api/electorates/' + country + '/' + year)
        .then(handleSuccess)
        .catch(handleError);

export const getElectoratesYearType = ( country, year, type ) =>
    request.get('/api/electorates/' + country + '/' + year + '/' + type)
        .then(handleSuccess)
        .catch(handleError);