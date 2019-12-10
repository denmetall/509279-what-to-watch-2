import React from 'react';

const Review = (props) => {
  const {id, comment, user, date, rating} = props;

  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{user.name}</cite>
        <time className="review__date" dateTime="2016-12-24">{date}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>;
};

export default Review;
