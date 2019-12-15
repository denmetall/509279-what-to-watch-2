import React from 'react';
import moment from "moment/moment";
import 'moment-duration-format';
import PropTypes from 'prop-types';

const Review = (props) => {
  const {review} = props;
  const {comment, date, rating, user} = review;
  const {name} = user;

  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{name}</cite>
        <time className="review__date" dateTime="2016-12-24">{
          moment(date).format(`MMMM Do, YYYY`)
        }</time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>;
};

Review.defaultProps = {
  comment: ``,
  date: ``,
  rating: null,
  user: {
    name: ``
  }
};

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
