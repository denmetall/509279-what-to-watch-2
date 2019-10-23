import React from 'react';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from 'prop-types';

const MovieCardsList = (props) => {
  const {films} = props;

  return <div className="catalog__movies-list">
    {films.map((film) => <SmallMovieCard key={film.id} film={film} onClickTitleHandler={() => {}}/>)}
  </div>;
};

MovieCardsList.propType = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieCardsList;
