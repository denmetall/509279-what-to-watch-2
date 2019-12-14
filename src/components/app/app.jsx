import React from 'react';
import {Switch, Route} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";
import MainPage from "../main-page/main-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import withFormReview from '../../hocs/with-form-review';
import withVideo from '../../hocs/with-video/with-video.jsx';
import MoviePlayer from '../movie-player/movie-player.jsx';
import {getFilms} from "../../selectors";
import {connect} from "react-redux";
import MyList from "../my-list/my-list.jsx";
import withPrivateRoute from '../../hocs/with-private-route/with-private-route.jsx';

const MoviePlayerWrapped = withVideo(MoviePlayer);
const AddReviewWrapped = withPrivateRoute(withFormReview(AddReview));
const MyListWrapped = withPrivateRoute(MyList);


const App = (props) => {
  const {films} = props;

  if (!films.length) {
    return null;
  }

  return <Switch>
    <Route path="/" exact>
      <MainPage/>
    </Route>
    <Route path="/login" exact component={SignIn}/>

    <Route path="/film/:id" exact render={({match}) => {
      return <MovieDetails filmId={+match.params.id}/>;
    }}
    />

    <Route path="/film/:id/show" exact render={({match}) => {
      const currentFilm = films.find((film) => film.id === +match.params.id);

      return <MoviePlayerWrapped
        src={currentFilm.videoLink}
        movie={currentFilm}
      />;
    }}
    />

    <Route path="/film/:id/review" exact render={(props) => {
      return <AddReviewWrapped {...props}/>;
    }}
    />

    <Route path="/my-list" exact render={(props) => {
      return <MyListWrapped {...props}/>;
    }}
    />
  </Switch>;
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state)
  };
};

export {App};

export default connect(mapStateToProps)(App);

