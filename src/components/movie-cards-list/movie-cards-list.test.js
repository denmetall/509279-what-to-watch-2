import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardsList from "./movie-cards-list.jsx";
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components MovieCardsList renders correctly`, () => {
  const tree = renderer
    .create(<Router>
      <MovieCardsList films={filmsMock} onClickTitleHandler={jest.fn()}/>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
