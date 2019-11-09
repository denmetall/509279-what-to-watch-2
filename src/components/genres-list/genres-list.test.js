import React from 'react';
import GenresList from './genres-list.jsx';
import renderer from 'react-test-renderer';

it(`Components GenresList renders correctly`, () => {
  const tree = renderer
    .create(<GenresList/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
