import React from 'react';
import {Link} from 'react-router-dom';

const BtnPlay = (props) => {
  const {filmId} = props;

  return <button className="btn btn--play movie-card__button" type="button">
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span><Link to={`/film/${filmId}/show`}>Play</Link></span>
  </button>;
};

export default BtnPlay;
