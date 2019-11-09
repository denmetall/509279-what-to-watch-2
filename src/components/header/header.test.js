import React from 'react';
import Header from './header.jsx';
import renderer from 'react-test-renderer';

it(`Components Header renders correctly`, () => {
  const tree = renderer
    .create(<Header/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
