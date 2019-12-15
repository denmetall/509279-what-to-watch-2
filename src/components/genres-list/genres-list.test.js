import React from 'react';
import {GenresList} from './genres-list.jsx';
import renderer from 'react-test-renderer';

it(`Components GenresList renders correctly`, () => {
  const props = {
    genres: ``,
    activeFilter: ``,
    onChangeFilter: () => {}
  };

  const tree = renderer
    .create(<GenresList {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
