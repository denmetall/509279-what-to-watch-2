import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from "./small-movie-card.jsx";
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components SmallMovieCard renders correctly`, () => {
  const tree = renderer
    .create(<Router>
      <SmallMovieCard film={filmsMock[0]} onClickTitleHandler={jest.fn()} onMouseOverCard={jest.fn()}/>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
