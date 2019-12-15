import React from 'react';
import Review from './review.jsx';
import renderer from 'react-test-renderer';

it(`Components Review renders correctly`, () => {
  const props = {
    review: {
      comment: ``,
      date: ``,
      rating: null,
      user: {
        name: ``
      }
    }
  };
  const tree = renderer
    .create(<Review {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
