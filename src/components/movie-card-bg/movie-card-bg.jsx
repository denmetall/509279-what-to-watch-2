import React from 'react';
import PropTypes from 'prop-types';

const MovieCardBg = (props) => {
  const {bg} = props;
  return <div className="movie-card__bg">
    <img src={bg} alt="The Grand Budapest Hotel"/>
  </div>;
};

MovieCardBg.propTypes = {
  bg: PropTypes.string
};

export default MovieCardBg;
