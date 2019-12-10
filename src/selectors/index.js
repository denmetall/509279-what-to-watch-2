import {createSelector} from "reselect";
import {DEFAULT_FILTER} from "../utils";
import moment from "moment/moment";

export const getGenre = (state) => {
  return state.genre;
};

export const getFilms = (state) => {
  return state.films;
};

export const getGenresList = createSelector(
    getFilms,
    (films) => {
      const set = new Set();
      films.forEach((film) => {
        set.add(film.genre);
      });
      const genres = [DEFAULT_FILTER, ...Array.from(set)];
      return genres;
    }
);

export const getFilteredFilms = createSelector(
    [getFilms, getGenre],
    (films, genre) => {
      return films.filter((movie) => {
        if (genre === DEFAULT_FILTER) {
          return true;
        } else {
          return movie.genre === genre;
        }
      });
    }
);

export const getAuthorizationRequired = (state) => {
  return state.authorization.isAuthorizationRequired;
};

export const getAvatar = (state) => {
  return state.authorization.userData.avatar_url;
};

const getMovieId = (state, id) => id;

export const getMovieById = createSelector([getFilms, getMovieId], (movies, id) => {
  return movies.find((it) => it.id === parseInt(id, 10));
});

export const getComments = (state) => state.moviesData.comments;

export const getSortedComments = createSelector(
  [getComments],
  (comments) => comments.sort((a, b) => moment(b.date) - moment(a.date))
);

export const getDividedComments = createSelector(
  [getSortedComments],
  (comments) => {
    return comments.reduce((acc, current, i) => {
      acc[i % 2 ? `even` : `odd`].push(current);
      return acc;
    }, {odd: [], even: []});
  }
);


