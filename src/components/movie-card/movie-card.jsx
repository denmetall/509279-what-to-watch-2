import React from 'react';
import {connect} from 'react-redux';
import Header from "../header/header.jsx";
import MovieCardBg from "../movie-card-bg/movie-card-bg.jsx";
import MovieCardDesc from "../movie-card-desc/movie-card-desc.jsx";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {promoFilm} = props;

  return <section className="movie-card">
    <MovieCardBg/>

    <h1 className="visually-hidden">WTW</h1>

    <Header/>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>

        <MovieCardDesc film={promoFilm}/>
      </div>
    </div>
  </section>;
};

const mapStateToProps = (state) => {
  return {promoFilm: state.promoFilm};
};

MovieCard.propTypes = {
  promoFilm: PropTypes.object
};

export default connect(mapStateToProps)(MovieCard);
