import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {Operations as ReviewOperations} from '../../reducer/reviews/reviews';
import {getMovieById, getAuthorizationRequired} from "../../selectors";
import MovieCardBg from "../movie-card-bg/movie-card-bg.jsx";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import {MovieType, Ratings} from "../../utils";

const AddReview = (props) => {
  if (!props.movie) {
    return null;
  }

  const {
    movie,
    comment,
    isCommentValid,
    commentErrorMessage,
    rating,
    isRatingValid,
    ratingErrorMessage,
    isFormValid,
    isShowError,
    onShowError,
    onUserInput,
    onAddReview,
    history
  } = props;

  const ratings = [
    Ratings.ONE,
    Ratings.TWO,
    Ratings.THREE,
    Ratings.FOUR,
    Ratings.FIVE
  ];

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    onShowError(true);

    if (!isFormValid) {
      return;
    }

    onAddReview(rating, comment, movie.id);
    history.goBack();
  };

  return <section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <MovieCardBg bg={movie.backgroundImage}/>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <Logo />

        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="movie-page.html" className="breadcrumbs__link">{movie.name}</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
        <UserBlock />
      </header>

      <div className="movie-card__poster movie-card__poster--small">
        <img src={movie.posterImage} alt={movie.name} width="218" height="327"/>
      </div>
    </div>

    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onSubmitHandler}>
        <div className="rating">
          <div className="rating__stars">
            {ratings.map((it, i) => (
              <Fragment key={i}>
                <input
                  className="rating__input"
                  id={`star-${it}`}
                  type="radio"
                  name="rating"
                  value={it}
                  checked={it === rating}
                  onChange={onUserInput}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${it}`}
                  style={{opacity: (it <= rating) ? 1 : 0.5}}
                >
                  Rating {it}
                </label>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment"
            placeholder="Review text"
            value={comment}
            onChange={onUserInput}
          ></textarea>

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>

        {isShowError && (
          <Fragment>
            {!isRatingValid && (
              <p><strong>{ratingErrorMessage}</strong></p>
            )}
            {!isCommentValid && (
              <p><strong>{commentErrorMessage}</strong></p>
            )}
          </Fragment>
        )}
      </form>
    </div>

  </section>;
};

AddReview.defaultProps = {
  movie: {},
  isAuthorizationRequired: false,
  onAddReview: () => {}
};

AddReview.propTypes = {
  movie: MovieType,
  comment: PropTypes.string,
  isCommentValid: PropTypes.bool,
  commentErrorMessage: PropTypes.string,
  rating: PropTypes.number,
  isRatingValid: PropTypes.bool,
  ratingErrorMessage: PropTypes.string,
  isFormValid: PropTypes.bool,
  isShowError: PropTypes.bool,
  onShowError: PropTypes.func,
  onUserInput: PropTypes.func,
  onAddReview: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  match: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = (state, props) => Object.assign({}, props, {
  movie: getMovieById(state, props.match.params.id),
  isAuthorizationRequired: getAuthorizationRequired(state)
});

const mapDispatchToProps = (dispatch) => ({
  onAddReview: (rating, comment, movieId) => {
    dispatch(ReviewOperations.addReview(rating, comment, movieId));
  }
});

export {AddReview};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddReview));
