import React from 'react';
import {GenresList} from './genres-list.jsx';
import renderer from 'react-test-renderer';
import {DEFAULT_FILTER} from "../../utils";

it(`Components GenresList renders correctly`, () => {
  const tree = renderer
    .create(<GenresList
      activeFilter={DEFAULT_FILTER}
      onChangeFilter={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
