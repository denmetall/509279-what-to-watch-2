import React from 'react';
import {Switch, Route} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";
import MainPage from "../main-page/main-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import withFormReview from '../../hocs/with-form-review';
import withVideo from '../../hocs/with-video/with-video.jsx';
import MoviePlayer from '../movie-player/movie-player.jsx';
import {getFilms, getNetworkFailed} from "../../selectors";
import {connect} from "react-redux";
import MyList from "../my-list/my-list.jsx";
import withPrivateRoute from '../../hocs/with-private-route/with-private-route.jsx';
import PropTypes from 'prop-types';
import {MovieType} from "../../utils";
import withLoginForm from "../../hocs/with-login-form";

const MoviePlayerWrapped = withVideo(MoviePlayer);
const AddReviewWrapped = withPrivateRoute(withFormReview(AddReview));
const MyListWrapped = withPrivateRoute(MyList);
const SignInWrapped = withLoginForm(SignIn);

const App = (props) => {
  const {films, networkFailed} = props;
  if (networkFailed) {
    return <h1>Ошибка: {networkFailed}</h1>;
  }

  if (!films.length) {
    return null;
  }

  return <Switch>
    <Route path="/" exact>
      <MainPage/>
    </Route>
    <Route path="/login" exact component={SignInWrapped}/>

    <Route path="/films/:id" exact render={({match}) => {
      return <MovieDetails filmId={+match.params.id}/>;
    }}
    />

    <Route path="/films/:id/show" exact render={({match}) => {
      const currentFilm = films.find((film) => film.id === +match.params.id);

      return <MoviePlayerWrapped
        src={currentFilm.videoLink}
        movie={currentFilm}
      />;
    }}
    />

    <Route path="/films/:id/review" exact render={(prop) => {
      return <AddReviewWrapped {...prop}/>;
    }}
    />

    <Route path="/my-list" exact render={(prop) => {
      return <MyListWrapped {...prop}/>;
    }}
    />
  </Switch>;
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state),
    networkFailed: getNetworkFailed(state)
  };
};

App.defaultProps = {
  films: [],
  networkFailed: false
};

App.propTypes = {
  films: PropTypes.arrayOf(MovieType),
  networkFailed: PropTypes.any
};

export {App};

export default connect(mapStateToProps)(App);

