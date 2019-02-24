import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const getCountry = (country) =>
    request.get('/api/country/' + country)
        .then(handleSuccess)
        .catch(handleError);