import React from 'react';
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";

const CatalogLikeThis = (props) => {
  const {films, onClickTitleHandler} = props;

  return <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <MovieCardsList films={films} onClickTitleHandler={onClickTitleHandler}/>
  </section>;
};

export default CatalogLikeThis;
