import React from 'react';
import Review from './review.jsx';
import renderer from 'react-test-renderer';

it(`Components Review renders correctly`, () => {
  const tree = renderer
    .create(<Review/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
