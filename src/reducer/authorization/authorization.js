import {getAdaptedUser} from "../../api/user-adapter";

const initialState = {
  isAuthorizationRequired: false,
  userData: {}
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SET_USER: `SET_USER`,
  RESET_USER: `RESET_USER`
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user
  }),
  resetUser: () => ({
    type: ActionType.RESET_USER
  })
};

const Operation = {
  checkAuth: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then(({status, data}) => {
        if (status === 200) {
          dispatch(ActionCreator.requireAuthorization(true));
          dispatch(ActionCreator.setUser(getAdaptedUser(data)));
        }
      });
  },
  login: (dataForm) => (dispatch, _getState, api) => {
    return api.post(`/login`, dataForm)
      .then(({data}) => {
        dispatch(ActionCreator.requireAuthorization(true));
        dispatch(ActionCreator.setUser(getAdaptedUser(data)));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case ActionType.SET_USER: return Object.assign({}, state, {
      userData: action.payload
    });
    case ActionType.RESET_USER: return Object.assign({}, state, {
      userData: initialState.userData
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation,
  ActionType
};
