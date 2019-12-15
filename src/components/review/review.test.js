import React from 'react';
import Review from './review.jsx';
import renderer from 'react-test-renderer';

it(`Components Review renders correctly`, () => {
  const review = {
    comment: ``,
    date: ``,
    rating: null,
    user: {
      name: ``
    }
  };
  const tree = renderer
    .create(<Review review={review}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
