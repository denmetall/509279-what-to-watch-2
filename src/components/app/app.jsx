import React, {Fragment, Component} from 'react';
import PageContent from "../page-content/page-content.jsx";
import PropTypes from 'prop-types';
import {Switch, Route} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null
    };
  }

  render() {
    const {films} = this.props;

    return <Switch>
      <Route path="/" exact>
        <Fragment>
          <PageContent films={films} onClickTitleHandler={this._onClickTitleHandler.bind(this)}/>
        </Fragment>;
      </Route>
      <Route path="/film/:id" render={(props) => {
        const filmId = this.state.id || +props.match.params.id;
        const indexArrayForCurrentFilm = films.findIndex((film) => film.id === filmId);
        return <MovieDetails
          film={films[indexArrayForCurrentFilm]}
        />;
      }}
      />
    </Switch>;
  }

  _onClickTitleHandler(film) {
    this.setState({
      id: film.id
    });
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
