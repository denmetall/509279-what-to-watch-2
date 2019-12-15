import React from 'react';
import BtnList from './btn-list.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components BtnList renders correctly`, () => {
  const props = {
    film: filmsMock[0],
    onClick: jest.fn(),
    isLoading: jest.fn(),
    onPost: jest.fn()
  };
  const tree = renderer
    .create(<BtnList {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
