import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getCountries = () =>
    request.get('/api/country')
        .then(handleSuccess)
        .catch(handleError);