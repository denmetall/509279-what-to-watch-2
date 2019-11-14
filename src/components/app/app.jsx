import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import PageContent from "../page-content/page-content.jsx";
import PropTypes from 'prop-types';
import MovieCard from "../movie-card/movie-card.jsx";
import {Switch, Route} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    return <Switch>
      <Route path="/" exact>
        <Fragment>
          <MovieCard film={films[0]}/>
          <PageContent films={films} />
        </Fragment>;
      </Route>
      <Route path="/film/:id" render={(props) => {
        const filmId = +props.match.params.id;
        const indexArrayForCurrentFilm = films.findIndex((film) => film.id === filmId);
        return <MovieDetails
          film={films[indexArrayForCurrentFilm]}
          films={films}
        />;
      }}
      />
    </Switch>;
  }
}

App.defaultProps = {
  films: []
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => {
  return {films: state.films};
};

export default connect(mapStateToProps)(App);
