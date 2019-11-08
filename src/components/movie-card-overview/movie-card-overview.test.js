import React from 'react';
import MovieCardOverview from './movie-card-overview.jsx';
import renderer from 'react-test-renderer';

it(`Components MovieCardOverview renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardOverview/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
