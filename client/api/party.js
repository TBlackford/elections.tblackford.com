import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const postParty = info =>
  request.post('/api/party')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getParty = () =>
  request.get('/api/party')
    .then(handleSuccess)
    .catch(handleError);

export const putParty = info =>
  request.put('/api/party')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const deleteParty = info =>
  request.delete('/api/party')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);
