import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getElections = country =>
    request.get('/api/elections' + country)
        .then(handleSuccess)
        .catch(handleError);

export const getElectionsYear = ( country, year ) =>
    request.get('/api/elections' + country + '/' + year)
        .then(handleSuccess)
        .catch(handleError);

export const getElectionsYearType = ( country, year, type ) =>
    request.get('/api/elections' + country + '/' + year + '/' + type)
        .then(handleSuccess)
        .catch(handleError);