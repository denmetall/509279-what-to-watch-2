import React from 'react';
import PropTypes from "prop-types";
import {DEFAULT_FILTER} from "../../utils";

const GenresList = (props) => {
  const {films, activeFilter, onChangeFilter} = props;

  const set = new Set();
  films.forEach((film) => {
    set.add(film.genre);
  });
  const genres = [DEFAULT_FILTER, ...Array.from(set)];
  const handleChangeClick = (evt) => {
    evt.preventDefault();
    onChangeFilter(evt.target.text);
  };

  return <ul className="catalog__genres-list">
    {genres.map((genre, index) => {
      return <li key={`genre-${index}`} className={`catalog__genres-item ${activeFilter === genre ? `catalog__genres-item--active` : ``}`}>
        <a onClick={handleChangeClick} href="#" className="catalog__genres-link">{genre}</a>
      </li>;
    })}
  </ul>;
};

GenresList.defaultProps = {
  films: []
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

export default GenresList;
