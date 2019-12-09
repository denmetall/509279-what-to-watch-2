const initialState = {
  isAuthorizationRequired: false,
  userData: {}
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  AUTH: `AUTH`
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),
  auth: (status) => ({
    type: ActionType.AUTH,
    payload: status
  })
};

const Operation = {
  checkAuth: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(true));
      });
  },
  login: (dataForm) => (dispatch, _getState, api) => {
    return api.post(`/login`, dataForm)
      .then(({data}) => {

        dispatch(ActionCreator.requireAuthorization(true));

        dispatch(ActionCreator.auth(data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case ActionType.AUTH: return Object.assign({}, state, {
      userData: action.payload
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation
};
