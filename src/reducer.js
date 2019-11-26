import filmsMock from './mocks/films';
import {DEFAULT_FILTER} from "./utils";
import {getAdaptedMovies} from "./api/adapter";

const initialState = {
  genre: DEFAULT_FILTER,
  films: [],
  promoFilm: filmsMock[0]
};

const ActionType = {
  SET_FILTER_GENRE: `SET_FILTER_GENRE`,
  GET_FILMS: `GET_FILMS`
};

const ActionCreator = {
  setGenreFilter: (genre) => ({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre
  }),
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
    case ActionType.SET_FILTER_GENRE:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case ActionType.GET_FILMS:
      return Object.assign({}, state, {
        films: getAdaptedMovies(action.payload),
      });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
  Operation
};
