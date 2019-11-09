import React from 'react';
import MovieCardDetails from './movie-card-details.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components MovieCardDetails renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardDetails film={filmsMock[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
