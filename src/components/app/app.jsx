import React from 'react';
import {Switch, Route} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";
import MainPage from "../main-page/main-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import withFormReview from '../../hocs/with-form-review';

const AddReviewWrapped = withFormReview(AddReview);

const App = () => {
  return <Switch>
    <Route path="/" exact>
      <MainPage/>
    </Route>
    <Route path="/login" exact component={SignIn}/>

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
export default App;
