import React from 'react';
import Header from "../header/header.jsx";
import MovieCardBg from "../movie-card-bg/movie-card-bg.jsx";
import MovieCardDesc from "../movie-card-desc/movie-card-desc.jsx";

import {connect} from 'react-redux';
import {getPromoMovie} from "../../selectors";

const MovieCard = (props) => {
  const {getPromoMovie} = props;
  const {backgroundImage, name, posterImage} = getPromoMovie;

  return <section className="movie-card">
    <MovieCardBg bg={backgroundImage}/>

    <h1 className="visually-hidden">WTW</h1>

    <Header/>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={posterImage} alt={name} width="218" height="327"/>
        </div>

        <MovieCardDesc film={getPromoMovie}/>
      </div>
    </div>
  </section>;
};

const mapStateToProps = (state) => {
  return {
    getPromoMovie: getPromoMovie(state)
  };
};

export {MovieCard};
export default connect(mapStateToProps)(MovieCard);
