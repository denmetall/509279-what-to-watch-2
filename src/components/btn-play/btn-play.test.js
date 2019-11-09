import React from 'react';
import BtnPlay from './btn-play.jsx';
import renderer from 'react-test-renderer';

it(`Components BtnPlay renders correctly`, () => {
  const tree = renderer
    .create(<BtnPlay/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
