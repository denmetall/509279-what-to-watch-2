import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const SmallMovieCard = (props) => {
  const {film, onClickTitleHandler, onMouseOverCard} = props;
  const {id, name, previewImage} = film;

  return <article className="small-movie-card catalog__movies-card" onMouseOver={() => onMouseOverCard(film)}>
    <div className="small-movie-card__image">
      <img src={previewImage} alt="Bohemian Rhapsody" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`/film/${id}`} className="small-movie-card__link" onClick={() => onClickTitleHandler(film)}>{name}</Link>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  onClickTitleHandler: PropTypes.func.isRequired,
  onMouseOverCard: PropTypes.func.isRequired
};

export default SmallMovieCard;
