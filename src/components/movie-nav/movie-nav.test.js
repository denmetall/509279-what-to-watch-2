import React from 'react';
import MovieNav from './movie-nav.jsx';
import renderer from 'react-test-renderer';

it(`Components MovieNav renders correctly`, () => {
  const tree = renderer
    .create(<MovieNav/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
