import React from 'react';
import Header from "../header/header.jsx";
import MovieCardBg from "../movie-card-bg/movie-card-bg.jsx";
import MovieCardDesc from "../movie-card-desc/movie-card-desc.jsx";

import {connect} from 'react-redux';
import {getPromoMovie} from "../../selectors";
import {MovieType} from "../../utils";

const MovieCard = (props) => {
  const {promoMovie} = props;
  const {backgroundImage, name, posterImage} = promoMovie;

  return <section className="movie-card">
    <MovieCardBg bg={backgroundImage}/>

    <h1 className="visually-hidden">WTW</h1>

    <Header/>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={posterImage} alt={name} width="218" height="327"/>
        </div>

        <MovieCardDesc film={promoMovie}/>
      </div>
    </div>
  </section>;
};

const mapStateToProps = (state) => {
  return {
    promoMovie: getPromoMovie(state)
  };
};

MovieCard.defaultProps = {
  promoMovie: {
    backgroundImage: ``,
    name: ``,
    posterImage: ``
  }
};

MovieCard.propTypes = {
  promoMovie: MovieType
};

export {MovieCard};
export default connect(mapStateToProps)(MovieCard);
