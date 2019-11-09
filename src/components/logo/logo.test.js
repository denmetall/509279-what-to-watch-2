import React from 'react';
import Logo from './logo.jsx';
import renderer from 'react-test-renderer';

it(`Components Logo renders correctly`, () => {
  const tree = renderer
    .create(<Logo/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
