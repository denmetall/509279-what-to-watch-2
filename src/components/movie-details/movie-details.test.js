import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from "./movie-details.jsx";
import filmsMock from "../../mocks/films";

it(`Components MovieDetails renders correctly`, () => {
  const tree = renderer
    .create(<MovieDetails film={filmsMock[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
