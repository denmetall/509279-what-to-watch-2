import axios from 'axios';
import {API} from '../utils';

const createAPI = () => {

  const api = axios.create({
    baseURL: API.BASE_URL,
    timeout: API.TIMEOUT,
    withCredentials: API.WITH_CREDENTIALS,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.status === 403) {
      // console.log(err);
      return;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
