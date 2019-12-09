import React from 'react';
import {Switch, Route} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";
import MainPage from "../main-page/main-page.jsx";
import connect from "react-redux/es/connect/connect";
import SignIn from "../sign-in/sign-in.jsx";
import PropTypes from "prop-types";
import {getAuthorizationRequired} from "../../selectors";

const App = (props) => {
  const {isAuthorizationRequired} = props;

  if (!isAuthorizationRequired) {
    return <SignIn />;
  }
  return <Switch>
    <Route path="/" exact>
      <MainPage/>
    </Route>
    <Route path="/film/:id" render={({match}) => {
      return <MovieDetails filmId={+match.params.id}/>;
    }}
    />
  </Switch>;
};

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: getAuthorizationRequired(state)
  };
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};

export {App};

export default connect(mapStateToProps)(App);
