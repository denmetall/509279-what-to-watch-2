import {DEFAULT_FILTER} from "../../utils";

const initialState = DEFAULT_FILTER;

const ActionType = {
  SET_FILTER_GENRE: `SET_FILTER_GENRE`
};

const ActionCreator = {
  setGenreFilter: (genre) => ({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return Object.assign({}, state, {
        genre: action.payload
      });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType
};
