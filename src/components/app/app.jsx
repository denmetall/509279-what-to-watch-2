import React from 'react';
import {Switch, Route} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";
import MainPage from "../main-page/main-page.jsx";

const App = () => {
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

export default App;
