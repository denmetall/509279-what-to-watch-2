import React from 'react';
import MovieCardDetails from './movie-card-details.jsx';
import renderer from 'react-test-renderer';

it(`Components MovieCardDetails renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardDetails/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
