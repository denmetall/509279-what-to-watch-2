import React from 'react';
import ShowMore from './show-more.jsx';
import renderer from 'react-test-renderer';

it(`Components ShowMore renders correctly`, () => {
  const tree = renderer
    .create(<ShowMore onClickBtn={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
