import React from 'react';
import PropTypes from 'prop-types';
import {Tabs} from "../../utils";
import MovieNavItem from "../movie-nav-item/movie-nav-item.jsx";

const MovieNav = (props) => {
  const {activeTab, onChangeTab} = props;

  return <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {Object.entries(Tabs).map(([key, title]) => {
        return <li
          key={key}
          className={`movie-nav__item ${activeTab === title ? `movie-nav__item--active` : ``}`}
          onClick={() => onChangeTab(title)}
        >
          <a href="#" className="movie-nav__link">{title}</a>
        </li>;
      })
      }
    </ul>
  </nav>;
};

MovieNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChangeTab: PropTypes.func.isRequired
};

export default MovieNav;
