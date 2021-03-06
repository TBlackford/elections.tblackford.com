import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getParty = () =>
    request.get('/api/party')
        .then(handleSuccess)
        .catch(handleError);
