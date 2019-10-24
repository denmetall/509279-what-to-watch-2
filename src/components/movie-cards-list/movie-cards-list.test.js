import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardsList from "./movie-cards-list.jsx";
import filmsMock from '../../mocks/films';

it(`Components MovieCardsList renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardsList films={filmsMock}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
