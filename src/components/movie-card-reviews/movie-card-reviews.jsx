import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Review from "../review/review.jsx";
import {Operations as ReviewOperations} from "../../reducer/reviews/reviews";
import {getReviews} from "../../selectors";

class MovieCardReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const {onLoadReviews, filmId} = this.props;
    onLoadReviews(filmId);
  }

  render() {
    const {reviews} = this.props;

    return <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review) => {
          return <Review key={review.id} review={review}/>;
        })}
      </div>
    </div>;
  }
};

const mapStateToProps = (state) => {
  return {
    reviews: getReviews(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews: (movieId) => {
    dispatch(ReviewOperations.loadReviews(movieId));
  }
});

export {MovieCardReviews};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardReviews);
