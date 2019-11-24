import React from 'react';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from 'prop-types';

const MovieCardsList = (props) => {
  const {films, onMouseOverCard, onMouseOutCard, activeMovieId} = props;

  return <div className="catalog__movies-list">
    {films.map((film) => {
      return <SmallMovieCard
        key={film.id}
        film={film}
        onMouseOverCard={onMouseOverCard}
        onMouseOutCard={onMouseOutCard}
        isPlaying={film.id === activeMovieId}
      />;
    })}
  </div>;
};

MovieCardsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMouseOverCard: PropTypes.func.isRequired,
  onMouseOutCard: PropTypes.func.isRequired,
  activeMovieId: PropTypes.number
};

export default MovieCardsList;
