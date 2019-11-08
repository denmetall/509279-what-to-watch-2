import React from 'react';
import Btn from './btn.jsx';
import renderer from 'react-test-renderer';

it(`Components Btn renders correctly`, () => {
  const tree = renderer
    .create(<Btn/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
