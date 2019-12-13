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
  const onFail = (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      history.push(`/login`);
      return;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
