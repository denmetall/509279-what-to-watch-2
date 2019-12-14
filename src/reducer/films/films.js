import {getAdaptedMovies, getAdaptedMovie} from "../../api/adapter";

const initialState = {
  films: [],
  promoMovie: {}
};

const ActionType = {
  GET_FILMS: `GET_FILMS`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`
};

const ActionCreator = {
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
  getPromoMovie: (movie) => ({
    type: ActionType.GET_PROMO_MOVIE,
    payload: movie
  })
};

const Operation = {
  getFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.getFilms(response.data));
      });
  },
  getPromoMovie: () => (dispatch, _getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.getPromoMovie(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS: return Object.assign({}, state, {
      films: getAdaptedMovies(action.payload)
    });
  }
  switch (action.type) {
    case ActionType.GET_PROMO_MOVIE: return Object.assign({}, state, {
      promoMovie: getAdaptedMovie(action.payload)
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
