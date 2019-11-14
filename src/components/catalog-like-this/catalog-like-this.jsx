import React from 'react';
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import PropTypes from "prop-types";

const CatalogLikeThis = (props) => {
  const {films} = props;

  return <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <MovieCardsList films={films}/>
  </section>;
};

CatalogLikeThis.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CatalogLikeThis;
