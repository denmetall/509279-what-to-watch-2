import React from 'react';
import {Switch, Route} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";
import MainPage from "../main-page/main-page.jsx";
import connect from "react-redux/es/connect/connect";
import SignIn from "../sign-in/sign-in.jsx";
import PropTypes from "prop-types";
import {getAuthorizationRequired} from "../../selectors";
import AddReview from "../add-review/add-review.jsx";
import withFormReview from '../../hocs/with-form-review';

const AddReviewWrapped = withFormReview(AddReview);

const App = (props) => {
  const {isAuthorizationRequired} = props;

  if (!isAuthorizationRequired) {
    return <SignIn />;
  }
  return <Switch>
    <Route path="/" exact>
      <MainPage/>
    </Route>
    <Route path="/film/:id" exact render={({match}) => {
      return <MovieDetails filmId={+match.params.id}/>;
    }}
    />
    <Route path="/film/:id/review" exact render={(props) => {
      return <AddReviewWrapped {...props}/>;
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
