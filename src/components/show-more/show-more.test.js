import React from 'react';
import ShowMore from './show-more.jsx';
import renderer from 'react-test-renderer';

it(`Components ShowMore renders correctly`, () => {
  const props = {
    onClickBtn: () => {}
  };
  const tree = renderer
    .create(<ShowMore {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
