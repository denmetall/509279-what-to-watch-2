import React from 'react';
import GenresList from './genres-list.jsx';
import renderer from 'react-test-renderer';
import {DEFAULT_FILTER} from "../../utils";
import filmsMock from "../../mocks/films";

it(`Components GenresList renders correctly`, () => {
  const tree = renderer
    .create(<GenresList
      films={filmsMock}
      activeFilter={DEFAULT_FILTER}
      onChangeFilter={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
