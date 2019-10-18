import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from "./small-movie-card.jsx";
import movieTitles from "../../mocks/movie-titles";

it(`Components SmallMovieCard renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard movieTitle={movieTitles[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
