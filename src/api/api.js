import axios from 'axios';
import {API} from '../utils';
import {ActionCreator} from "../reducer/authorization/authorization";
import {ActionCreator as ActionCreatorNetworkFailed} from "../reducer/network-failed/network-failed";

const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NETWORK_FAILED: 404
};

const createAPI = (dispatch) => {

  const api = axios.create({
    baseURL: API.BASE_URL,
    timeout: API.TIMEOUT,
    withCredentials: API.WITH_CREDENTIALS,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error && error.response && error.response.status) {
      if (error.response.status === HTTP_STATUS.UNAUTHORIZED || error.response.status === HTTP_STATUS.FORBIDDEN) {
        dispatch(ActionCreator.resetUser());
        dispatch(ActionCreator.requireAuthorization(false));
      }
      if (error.response.status >= HTTP_STATUS.NETWORK_FAILED) {
        dispatch(ActionCreatorNetworkFailed.showError(error.response.status));
      }
    }

    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
