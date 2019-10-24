import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from "./small-movie-card.jsx";

it(`Components SmallMovieCard renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard film={{}} onClickTitleHandler={jest.fn()} onMouseOverCard={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
