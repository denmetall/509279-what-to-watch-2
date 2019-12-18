import axios from 'axios';
import {API} from '../utils';
import {ActionCreator} from "../reducer/authorization/authorization";

const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403
};

const createAPI = (dispatch) => {

  const api = axios.create({
    baseURL: API.BASE_URL,
    timeout: API.TIMEOUT,
    withCredentials: API.WITH_CREDENTIALS,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    switch (error.response.status) {
      case HTTP_STATUS.UNAUTHORIZED || HTTP_STATUS.FORBIDDEN:
        dispatch(ActionCreator.resetUser());
        dispatch(ActionCreator.requireAuthorization(false));
        break;
    }

    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
