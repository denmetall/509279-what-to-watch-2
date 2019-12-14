import React, {Fragment} from 'react';
import PropTypes from "prop-types";

const MovieCardOverview = (props) => {
  const {film} = props;

  const {rating, scoresCount, director, description, starring} = film;

  return <Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{description}</p>

      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {starring.map((item) => `${starring}, `)}</strong></p>
    </div>
  </Fragment>;
};

MovieCardOverview.propTypes = {
  film: PropTypes.object.isRequired
};

export default MovieCardOverview;
