import React, {Fragment} from 'react';
import MovieCard from "../movie-card/movie-card.jsx";
import PageContent from "../page-content/page-content.jsx";
import movieTitles from "../../mocks/movie-titles.js";

const App = () => {
  return <Fragment>
    <MovieCard />
    <PageContent movieTitles={movieTitles}/>
  </Fragment>;
};

export default App;
