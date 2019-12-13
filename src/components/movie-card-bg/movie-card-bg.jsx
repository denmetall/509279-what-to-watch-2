import React from 'react';

const MovieCardBg = (props) => {
  const {bg} = props;
  return <div className="movie-card__bg">
    <img src={bg} alt="The Grand Budapest Hotel"/>
  </div>;
};

export default MovieCardBg;
