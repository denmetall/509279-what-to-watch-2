import React from 'react';
import MovieCardOverview from './movie-card-overview.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components MovieCardOverview renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardOverview film={filmsMock[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
