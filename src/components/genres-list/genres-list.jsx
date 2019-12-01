import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getGenresList} from "../../selectors";

const GenresList = (props) => {
  const {genres, activeFilter, onChangeFilter} = props;

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
  genres: []
};

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    genres: getGenresList(state)
  };
};

export {GenresList};

export default connect(mapStateToProps)(GenresList);
