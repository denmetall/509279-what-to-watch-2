import React from 'react';
import MovieCardBg from './movie-card-bg.jsx';
import renderer from 'react-test-renderer';

it(`Components MovieCardBg renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardBg bg={``}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
