import React from 'react';
import {Link} from 'react-router-dom';

const Btn = (props) => {
  const {movieId} = props;
  return <Link to={`/film/${movieId}/review`} className="btn movie-card__button">Add review</Link>;
};

export default Btn;
