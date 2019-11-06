import React from 'react';
import MovieCardBg from "../movie-card-bg/movie-card-bg.jsx";
import Header from "../header/header.jsx";
import MovieCardDesc from "../movie-card-desc/movie-card-desc.jsx";
import MovieCardTop from "../movie-card-top/movie-card-top.jsx";

const MovieCardFull = (props) => {
  const {name, genre, released, posterImage} = props;

  return <section className="movie-card movie-card--full">
    <div className="movie-card__hero">
      <MovieCardBg/>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="movie-card__wrap">
        <MovieCardDesc
          name={name}
          genre={genre}
          released={released}
        />
      </div>
    </div>

    <MovieCardTop posterImage={posterImage}/>
  </section>;
};

export default MovieCardFull;
