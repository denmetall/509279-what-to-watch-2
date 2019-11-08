import React from 'react';
import MovieCardBg from "../movie-card-bg/movie-card-bg.jsx";
import Header from "../header/header.jsx";
import MovieCardDesc from "../movie-card-desc/movie-card-desc.jsx";
import MovieCardTop from "../movie-card-top/movie-card-top.jsx";
import PropTypes from "prop-types";

const MovieCardFull = (props) => {
  const {film} = props;

  return <section className="movie-card movie-card--full">
    <div className="movie-card__hero">
      <MovieCardBg/>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="movie-card__wrap">
        <MovieCardDesc film={film}/>
      </div>
    </div>

    <MovieCardTop film={film}/>
  </section>;
};

MovieCardFull.propTypes = {
  film: PropTypes.object.isRequired
};

export default MovieCardFull;
