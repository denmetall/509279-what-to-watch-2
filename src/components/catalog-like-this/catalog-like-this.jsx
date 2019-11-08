import React from 'react';
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import PropTypes from "prop-types";

const CatalogLikeThis = (props) => {
  const {films, onClickTitleHandler} = props;

  return <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <MovieCardsList films={films} onClickTitleHandler={onClickTitleHandler}/>
  </section>;
};

CatalogLikeThis.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickTitleHandler: PropTypes.func.isRequired
};

export default CatalogLikeThis;
