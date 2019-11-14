import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import MovieCard from "../movie-card/movie-card.jsx";
import PageContent from "../page-content/page-content.jsx";
import PropTypes from "prop-types";

const MainPage = (props) => {
  const {films} = props;

  return <Fragment>
    <MovieCard film={films[0]}/>
    <PageContent films={films} />
  </Fragment>;
};

MainPage.defaultProps = {
  films: []
};

const mapStateToProps = (state) => {
  return {films: state.films};
};

MainPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(MainPage);
