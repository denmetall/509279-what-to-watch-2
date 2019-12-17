import {getAdaptedMovies, getAdaptedMovie} from "../../api/adapter";
import {startLoading, stopLoading} from "react-redux-hoc-loader";
import {MOVIES_COUNT_DEFAULT, LoaderName} from "../../utils";

const initialState = {
  films: [],
  promoMovie: {},
  moviesCounter: MOVIES_COUNT_DEFAULT
};

const ActionType = {
  GET_FILMS: `GET_FILMS`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`,
  INCREASE_MOVIES_COUNTER: `INCREASE_MOVIES_COUNTER`
};

const ActionCreator = {
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
  getPromoMovie: (movie) => ({
    type: ActionType.GET_PROMO_MOVIE,
    payload: movie
  }),
  increaseMoviesCounter: (count) => ({
    type: ActionType.INCREASE_MOVIES_COUNTER,
    payload: count
  })
};

const Operation = {
  getFilms: () => (dispatch, _getState, api) => {
    dispatch(startLoading(LoaderName.MOVIES));
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.getFilms(response.data));
        dispatch(stopLoading(LoaderName.MOVIES));
      })
      .catch(() => {
        dispatch(stopLoading(LoaderName.MOVIES));
      });
  },
  getPromoMovie: () => (dispatch, _getState, api) => {
    dispatch(startLoading(LoaderName.PROMO));
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.getPromoMovie(response.data));
        dispatch(stopLoading(LoaderName.PROMO));
      })
      .catch(() => {
        dispatch(stopLoading(LoaderName.PROMO));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS: return Object.assign({}, state, {
      films: getAdaptedMovies(action.payload)
    });
    case ActionType.GET_PROMO_MOVIE: return Object.assign({}, state, {
      promoMovie: getAdaptedMovie(action.payload)
    });
    case ActionType.INCREASE_MOVIES_COUNTER: return Object.assign({}, state, {
      moviesCounter: state.moviesCounter + action.payload
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
