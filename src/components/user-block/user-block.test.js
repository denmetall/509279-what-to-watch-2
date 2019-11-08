import React from 'react';
import UserBlock from './user-block.jsx';
import renderer from 'react-test-renderer';

it(`Components UserBlock renders correctly`, () => {
  const tree = renderer
    .create(<UserBlock/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
