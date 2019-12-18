const initialState = false;

const ActionType = {
  SHOW_ERROR: `SHOW_ERROR`
};

const ActionCreator = {
  showError: (error) => ({
    type: ActionType.SHOW_ERROR,
    payload: error
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_ERROR:
      return action.payload;
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType
};
