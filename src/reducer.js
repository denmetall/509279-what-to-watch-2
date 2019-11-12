const initialState = {
  genre: `All genres`,
  movies: []
};

const ActionType = {
  SET_FILTER_GENRE: `SET_FILTER_GENRE`,
  GET_MOVIES_LIST: `GET_MOVIES_LIST`
};

const getFilterMovies = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre);
};

const ActionCreator = {
  setGenreFilter: (genre) => ({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre
  }),

  getMoviesList: (movies, genre) => ({
    type: ActionType.GET_MOVIES_LIST,
    payload: genre === `All genres` ? movies.slice() : getFilterMovies(movies, genre)
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
        movies: action.payload
      });
  }

  return state;
};

export {
  reducer,
  ActionCreator
};
