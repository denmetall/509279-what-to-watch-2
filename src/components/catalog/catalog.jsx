import React from 'react';
import GenresList from "../genres-list/genres-list.jsx";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import PropTypes from "prop-types";

const Catalog = (props) => {
  const {films, onClickTitleHandler} = props;

  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenresList/>

    <MovieCardsList films={films} onClickTitleHandler={onClickTitleHandler}/>

    <div className="catalog__more">
      <ShowMore/>
    </div>
  </section>;
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickTitleHandler: PropTypes.func.isRequired
};

export default Catalog;
