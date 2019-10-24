import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {film, onClickTitleHandler, onMouseOverCard} = props;
  const {name, posterImage} = film;

  return <article className="small-movie-card catalog__movies-card" onMouseOver={onMouseOverCard}>
    <div className="small-movie-card__image">
      <img src={posterImage} alt="Bohemian Rhapsody" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" onClick={onClickTitleHandler} href="movie-page.html">{name}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  onClickTitleHandler: PropTypes.func.isRequired,
  onMouseOverCard: PropTypes.func.isRequired
};

export default SmallMovieCard;
