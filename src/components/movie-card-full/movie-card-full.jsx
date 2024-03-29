import React from 'react';
import MovieCardBg from "../movie-card-bg/movie-card-bg.jsx";
import Header from "../header/header.jsx";
import MovieCardDesc from "../movie-card-desc/movie-card-desc.jsx";
import MovieCardTop from "../movie-card-top/movie-card-top.jsx";
import {MovieType} from "../../utils";

const MovieCardFull = (props) => {

  const {film} = props;
  const {backgroundImage} = film;

  return <section className="movie-card movie-card--full">
    <div className="movie-card__hero">
      <MovieCardBg bg={backgroundImage}/>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="movie-card__wrap">
        <MovieCardDesc film={film}/>
      </div>
    </div>

    <MovieCardTop film={film}/>
  </section>;
};

MovieCardFull.defaultProps = {
  film: {}
};

MovieCardFull.propTypes = {
  film: MovieType
};

export default MovieCardFull;
