import React from 'react';
import PropTypes from 'prop-types';

const MovieNavItem = (props) => {
  const {activeTab, onChangeTab, title} = props;

  return <li
    className={`movie-nav__item ${activeTab === title ? `movie-nav__item--active` : ``}`}
    onClick={() => onChangeTab(title)}
  >
    <a href="#" className="movie-nav__link">{title}</a>
  </li>;
};

MovieNavItem.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChangeTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default MovieNavItem;
