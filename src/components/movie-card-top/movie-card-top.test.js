import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTop from "./movie-card-top.jsx";
import filmsMock from '../../mocks/films';

it(`Components MovieCardTop renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardTop film={filmsMock[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
