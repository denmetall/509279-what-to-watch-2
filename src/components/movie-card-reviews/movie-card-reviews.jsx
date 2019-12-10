import React from 'react';
import {connect} from "react-redux";
import {getDividedComments} from "../../selectors";

const MovieCardReviews = ({dividedComments}) => {
  debugger;
  return (
    <div className="movie-card__reviews movie-card__row">
      {Object.entries(dividedComments).map(([key, comments]) => (
        <div
          className="movie-card__reviews-col"
          key={key}
        >
          {comments.map(({id, comment, user, date, rating}) => {
            return (
              <div
                className="review"
                key={id}
              >
                <blockquote className="review__quote">
                  <p className="review__text">{comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{user.name}</cite>

                  </footer>
                </blockquote>

                <div className="review__rating">{rating}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  dividedComments: getDividedComments(state),
});

export {MovieCardReviews};
export default connect(mapStateToProps)(MovieCardReviews);
