import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import MovieCardFull from "../movie-card-full/movie-card-full.jsx";
import Footer from "../footer/footer.jsx";
import CatalogLikeThis from "../catalog-like-this/catalog-like-this.jsx";
import {connect} from 'react-redux';
import {getFilms} from "../../selectors";

const MovieDetails = (props) => {
  const {films, filmId} = props;

  const currentFilm = films.findIndex((film) => film.id === filmId);

  return <Fragment>
    <MovieCardFull film={films[currentFilm]}/>

    <div className="page-content">
      <CatalogLikeThis
        films={films}
      />
      <Footer/>
    </div>
  </Fragment>;
};

MovieDetails.defaultProps = {
  films: []
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state)
  };
};

MovieDetails.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmId: PropTypes.number.isRequired
};

export {MovieDetails};

export default connect(mapStateToProps)(MovieDetails);
