import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import MovieCardFull from "../movie-card-full/movie-card-full.jsx";
import Footer from "../footer/footer.jsx";
import CatalogLikeThis from "../catalog-like-this/catalog-like-this.jsx";
import {connect} from 'react-redux';
import {getFilms, getLikeFilms, getMovieById} from "../../selectors";
import {MovieType} from "../../utils";

const MovieDetails = (props) => {
  const {filmsLike, films, filmId} = props;

  const currentFilm = films.findIndex((film) => film.id === filmId);

  return <Fragment>
    <MovieCardFull film={films[currentFilm]}/>

    <div className="page-content">
      <CatalogLikeThis
        films={filmsLike}
      />
      <Footer/>
    </div>
  </Fragment>;
};

MovieDetails.defaultProps = {
  films: [],
  filmsLike: []
};

const mapStateToProps = (state, {filmId}) => {
  const currentMovie = getMovieById(state, filmId);
  return {
    films: getFilms(state),
    filmsLike: getLikeFilms(state, currentMovie)
  };
};

MovieDetails.propTypes = {
  films: PropTypes.arrayOf(MovieType),
  filmId: PropTypes.number.isRequired,
  filmsLike: PropTypes.arrayOf(MovieType)
};

export {MovieDetails};

export default connect(mapStateToProps)(MovieDetails);
