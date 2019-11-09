import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFull from "./movie-card-full.jsx";
import filmsMock from '../../mocks/films';

it(`Components MovieCardFull renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardFull film={filmsMock[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
