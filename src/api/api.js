import axios from 'axios';
import {API} from '../utils';
import history from "../history";

const createAPI = () => {

  const api = axios.create({
    baseURL: API.BASE_URL,
    timeout: API.TIMEOUT,
    withCredentials: API.WITH_CREDENTIALS,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.status === 401) {
      history.push(`/login`);
      return;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
