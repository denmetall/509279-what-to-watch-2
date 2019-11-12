const initialState = {
  genre: `All genres`,
  movies: []
};

const ActionType = {
  SET_FILTER_GENRE: `SET_FILTER_GENRE`,
  GET_MOVIES_LIST: `GET_MOVIES_LIST`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case ActionType.GET_MOVIES_LIST:
      return Object.assign({}, state, {
        movies: action.payload
      });
  }

  return state;
};

export {
  reducer
};
