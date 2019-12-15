import React from 'react';
import BtnList from './btn-list.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components BtnList renders correctly`, () => {
  const tree = renderer
    .create(<BtnList
      film={filmsMock[0]}
      onClick={jest.fn()}
      isLoading={jest.fn()}
      onPost={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
