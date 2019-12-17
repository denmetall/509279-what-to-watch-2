import React, {Fragment} from 'react';
import {BreakpointForTextRating, MovieType, RatingText} from "../../utils";

const MovieCardOverview = (props) => {
  const {film} = props;

  const {rating, scoresCount, director, description, starring} = film;

  const getRatingText = (currentRating) => {
    if (currentRating >= BreakpointForTextRating.AWESOME) {
      return RatingText.AWESOME;
    } else if (currentRating < BreakpointForTextRating.AWESOME && currentRating >= BreakpointForTextRating.VERY_GOOD) {
      return RatingText.VERY_GOOD;
    } else if (currentRating < BreakpointForTextRating.VERY_GOOD && currentRating >= BreakpointForTextRating.GOOD) {
      return RatingText.GOOD;
    } else if (currentRating < BreakpointForTextRating.GOOD && currentRating >= BreakpointForTextRating.NORMAL) {
      return RatingText.NORMAL;
    } else {
      return RatingText.BAD;
    }
  };

  return <Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingText(rating)}</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{description}</p>

      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {starring.map((item) => `${item}, `)}</strong></p>
    </div>
  </Fragment>;
};
//
// static sortByDate(a, b) {
//   return new Date(b.date) - new Date(a.date);
// }

MovieCardOverview.propTypes = {
  film: MovieType
};

export default MovieCardOverview;
