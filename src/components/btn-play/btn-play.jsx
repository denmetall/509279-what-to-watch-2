import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const BtnPlay = (props) => {
  const {filmId, history} = props;

  return <button
    className="btn btn--play movie-card__button"
    type="button"
    onClick={() => history.push(`/film/${filmId}/show`)}
  >
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </button>;
};

BtnPlay.propTypes = {
  filmId: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(BtnPlay);
