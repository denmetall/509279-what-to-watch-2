import React from 'react';
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons.jsx";

const MovieCardDesc = (props) => {
  const {name = `The Grand Budapest Hotel`, genre = `Drama`, released = 2014} = props;

  return <div className="movie-card__desc">
    <h2 className="movie-card__title">{name}</h2>
    <p className="movie-card__meta">
      <span className="movie-card__genre">{genre}</span>
      <span className="movie-card__year">{released}</span>
    </p>

    <MovieCardButtons movieCardFool={true}/>
  </div>;
};

export default MovieCardDesc;
