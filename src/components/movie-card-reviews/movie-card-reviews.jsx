import React from 'react';
import Review from "../review/review.jsx";

const MovieCardReviews = () => {
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      <Review/>
      <Review/>
      <Review/>
    </div>
    <div className="movie-card__reviews-col">
      <Review/>
      <Review/>
      <Review/>
    </div>
  </div>;
};

export default MovieCardReviews;
