import {getAdaptedMovies} from "../../api/adapter";

const initialState = [];

const ActionType = {
  GET_FILMS: `GET_FILMS`
};

const ActionCreator = {
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  })
};

const Operation = {
  getFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.getFilms(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return getAdaptedMovies(action.payload);
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
  Operation
};
