import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from "./small-movie-card.jsx";
import filmsMock from '../../mocks/films';

it(`Components SmallMovieCard renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard film={filmsMock[0]} onClickTitleHandler={jest.fn()} onMouseOverCard={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
