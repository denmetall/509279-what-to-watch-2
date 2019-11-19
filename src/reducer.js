import filmsMock from './mocks/films';
import {DEFAULT_FILTER} from "./utils";

const initialState = {
  genre: DEFAULT_FILTER,
  films: filmsMock,
  filmsSort: filmsMock,
  promoFilm: filmsMock[0]
};

const ActionType = {
  SET_FILTER_GENRE: `SET_FILTER_GENRE`,
  GET_MOVIES_LIST: `GET_MOVIES_LIST`
};

const getFilterMovies = (moviesGenre) => {
  switch (moviesGenre) {
    case DEFAULT_FILTER:
      return filmsMock;
  }

  return filmsMock.slice().filter((movie) => movie.genre === moviesGenre);
};

const ActionCreator = {
  setGenreFilter: (genre) => ({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre
  }),

  getMoviesList: (genre) => ({
    type: ActionType.GET_MOVIES_LIST,
    payload: getFilterMovies(genre)
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case ActionType.GET_MOVIES_LIST:
      return Object.assign({}, state, {
        filmsSort: action.payload
      });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType
};
