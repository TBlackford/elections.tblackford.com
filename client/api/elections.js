import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getElections = country =>
    request.get('/api/elections' + country)
        .then(handleSuccess)
        .catch(handleError);