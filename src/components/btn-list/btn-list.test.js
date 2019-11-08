import React from 'react';
import BtnList from './btn-list.jsx';
import renderer from 'react-test-renderer';

it(`Components BtnList renders correctly`, () => {
  const tree = renderer
    .create(<BtnList/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
