import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getMap = (country, year, election) =>
    request.get('/api/map/' + country + '/' + year + '/' + election)
        .then(handleSuccess)
        .catch(handleError);