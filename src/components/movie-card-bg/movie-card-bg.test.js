import React from 'react';
import MovieCardBg from './movie-card-bg.jsx';
import renderer from 'react-test-renderer';

it(`Components MovieCardBg renders correctly`, () => {
  const props = {
    bg: ``
  };

  const tree = renderer
    .create(<MovieCardBg {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
