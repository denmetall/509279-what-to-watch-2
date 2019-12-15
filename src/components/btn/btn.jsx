import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Btn = (props) => {
  const {movieId} = props;
  return <Link to={`/film/${movieId}/review`} className="btn movie-card__button">Add review</Link>;
};

Btn.propTypes = {
  movieId: PropTypes.number
};

export default Btn;
