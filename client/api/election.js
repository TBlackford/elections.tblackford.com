import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getElection = ( country, year, type ) =>
    request.get('/api/elections/' + country + '/' + year + '/' + type)
        .then(handleSuccess)
        .catch(handleError);