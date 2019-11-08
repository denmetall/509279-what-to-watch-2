import React from 'react';
import MovieCardReviews from './movie-card-reviews.jsx';
import renderer from 'react-test-renderer';

it(`Components MovieCardReviews renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardReviews/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
