import React from 'react';
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import PropTypes from "prop-types";
import withActiveItem from "../../hocs/with-active-item";

const MovieCardsListWrapped = withActiveItem(MovieCardsList);

const CatalogLikeThis = (props) => {
  const {films} = props;

  return <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <MovieCardsListWrapped films={films}/>
  </section>;
};

CatalogLikeThis.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CatalogLikeThis;
