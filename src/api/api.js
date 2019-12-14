import axios from 'axios';
import {API} from '../utils';

const createAPI = (onForbidden) => {

  const api = axios.create({
    baseURL: API.BASE_URL,
    timeout: API.TIMEOUT,
    withCredentials: API.WITH_CREDENTIALS,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      onForbidden();

      return;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
