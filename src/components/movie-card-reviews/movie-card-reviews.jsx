import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Review from "../review/review.jsx";
import {Operations as ReviewOperations} from "../../reducer/reviews/reviews";
import {getReviews} from "../../selectors";
import PropTypes from 'prop-types';

class MovieCardReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
}

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

MovieCardReviews.defaultProps = {
  reviews: [{
    comment: ``,
    date: ``,
    rating: null,
    user: {
      name: ``
    }
  }],
  onLoadReviews: () => {}
};

MovieCardReviews.propTypes = {
  onLoadReviews: PropTypes.func.isRequired,
  filmId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired
};

export {MovieCardReviews};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardReviews);
