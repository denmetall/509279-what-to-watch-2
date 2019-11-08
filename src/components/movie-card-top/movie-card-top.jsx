import React from 'react';
import MovieNav from "../movie-nav/movie-nav.jsx";
import MovieCardDetails from "../movie-card-details.jsx/movie-card-details.jsx";
import MovieCardOverview from "../movie-card-overview/movie-card-overview.jsx";
import MovieCardReviews from "../movie-card-reviews/movie-card-reviews.jsx";
import PropTypes from "prop-types";

const MovieCardTop = (props) => {
  const {film} = props;
  const {posterImage} = film;

  return <div className="movie-card__wrap movie-card__translate-top">
    <div className="movie-card__info">
      <div className="movie-card__poster movie-card__poster--big">
        <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
      </div>

      <div className="movie-card__desc">
        <MovieNav/>

        <MovieCardDetails/>
        <MovieCardOverview/>
        <MovieCardReviews/>
      </div>
    </div>
  </div>;
};

MovieCardTop.propTypes = {
  film: PropTypes.object.isRequired
};

export default MovieCardTop;
