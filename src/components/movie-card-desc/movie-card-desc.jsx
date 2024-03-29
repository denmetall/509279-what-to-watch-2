import React from 'react';
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons.jsx";
import {MovieType} from "../../utils";

const MovieCardDesc = (props) => {
  const {film} = props;
  const {name, genre, released} = film;

  return <div className="movie-card__desc">
    <h2 className="movie-card__title">{name}</h2>
    <p className="movie-card__meta">
      <span className="movie-card__genre">{genre}</span>
      <span className="movie-card__year">{released}</span>
    </p>

    <MovieCardButtons movieCardFool={true} movie={film}/>
  </div>;
};

MovieCardDesc.propTypes = {
  film: MovieType
};

export default MovieCardDesc;
