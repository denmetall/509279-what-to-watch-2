import {createSelector} from "reselect";
import {DEFAULT_FILTER} from "../utils";

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